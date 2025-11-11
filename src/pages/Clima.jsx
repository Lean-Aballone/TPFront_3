import { useEffect, useMemo, useState } from "react";
import Footer from "../components/Footer";
import "./apiSections.css";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&current_weather=true&daily=temperature_2m_max,temperature_2m_min,precipitation_sum&timezone=auto";

const WIND_DIRECTIONS = [
  "N",
  "NNE",
  "NE",
  "ENE",
  "E",
  "ESE",
  "SE",
  "SSE",
  "S",
  "SSO",
  "SO",
  "OSO",
  "O",
  "ONO",
  "NO",
  "NNO",
];

const formatWindDirection = (degrees) => {
  if (typeof degrees !== "number" || Number.isNaN(degrees)) return "N/A";
  const index = Math.round((degrees % 360) / 22.5);
  return WIND_DIRECTIONS[index % WIND_DIRECTIONS.length];
};

const formatDate = (isoDate) => {
  if (!isoDate) return "Fecha no disponible";
  const date = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "long",
    day: "numeric",
    month: "short",
  }).format(date);
};

const Clima = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchWeather = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("No pudimos obtener los datos de clima.");
        }
        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Ocurrió un problema al cargar el pronóstico. Intenta más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    return () => controller.abort();
  }, []);

  const dailyForecast = useMemo(() => {
    if (!weather?.daily) return [];
    const { time, temperature_2m_min, temperature_2m_max, precipitation_sum } =
      weather.daily;

    return time.map((day, index) => ({
      day,
      min: temperature_2m_min?.[index],
      max: temperature_2m_max?.[index],
      precipitation: precipitation_sum?.[index],
    }));
  }, [weather]);

  const current = weather?.current_weather;

  return (
    <main className="api-page">
      <div className="api-page__inner">
        <header className="api-page__header">
          <h1>Clima en Buenos Aires</h1>
          <p>
            Datos en vivo provistos por Open-Meteo para la Ciudad Autónoma de Buenos Aires.
            Revisá la temperatura actual, velocidad del viento y un pronóstico de los próximos días.
          </p>
        </header>

        {loading && <div className="api-page__status">Cargando pronóstico...</div>}

        {error && !loading && <div className="api-page__status">{error}</div>}

        {!loading && !error && current && (
          <>
            <section className="api-card-grid api-grid--two">
              <article className="api-card">
                <span className="api-card__tag">Actual</span>
                <h2 className="api-card__title">Condiciones actuales</h2>
                <p className="api-card__meta">
                  Temperatura: <strong>{current.temperature.toFixed(1)}°C</strong>
                </p>
                <p className="api-card__meta">
                  Viento:{" "}
                  <strong>
                    {current.windspeed.toFixed(1)} km/h {formatWindDirection(current.winddirection)}
                  </strong>
                </p>
                <p className="api-card__meta">
                  Última actualización: {new Date(current.time).toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" })}
                </p>
              </article>

              <article className="api-card">
                <span className="api-card__tag">Resumen</span>
                <h2 className="api-card__title">Pronóstico diario</h2>
                <p className="api-card__body">
                  El pronóstico extendido incluye temperaturas máximas y mínimas, junto con el acumulado de
                  precipitaciones estimado para cada jornada. Ideal para planificar la semana.
                </p>
                <p className="api-card__meta">
                  Los datos se recalculan cada hora según la zona horaria local.
                </p>
              </article>
            </section>

            <section>
              <h2 className="api-card__title">Próximos días</h2>
              <div className="api-card-grid">
                {dailyForecast.map((item) => (
                  <article key={item.day} className="api-card">
                    <h3 className="api-card__title">{formatDate(item.day)}</h3>
                    <p className="api-card__meta">
                      Temperatura máxima: <strong>{item.max?.toFixed(1) ?? "—"}°C</strong>
                    </p>
                    <p className="api-card__meta">
                      Temperatura mínima: <strong>{item.min?.toFixed(1) ?? "—"}°C</strong>
                    </p>
                    <p className="api-card__meta">
                      Precipitación estimada:{" "}
                      <strong>
                        {typeof item.precipitation === "number"
                          ? `${item.precipitation.toFixed(1)} mm`
                          : "—"}
                      </strong>
                    </p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Clima;
