import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";

const API_URL =
  "https://api.open-meteo.com/v1/forecast?latitude=-34.6037&longitude=-58.3816&current_weather=true&daily=temperature_2m_max,temperature_2m_min&timezone=auto";

const formatDate = (isoDate) => {
  if (!isoDate) return "";
  const date = new Date(`${isoDate}T00:00:00`);
  return new Intl.DateTimeFormat("es-AR", {
    weekday: "short",
    day: "numeric",
    month: "short",
  })
    .format(date)
    .replace(".", "");
};

const ClimaPreview = () => {
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
          throw new Error("Error al obtener datos de clima.");
        }
        const data = await response.json();
        setWeather(data);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("No pudimos cargar el clima ahora.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();

    return () => controller.abort();
  }, []);

  const today = useMemo(() => {
    if (!weather?.daily) return null;
    return {
      date: weather.daily.time?.[0],
      max: weather.daily.temperature_2m_max?.[0],
      min: weather.daily.temperature_2m_min?.[0],
    };
  }, [weather]);

  const current = weather?.current_weather;

  return (
    <article className="home-preview-card home-preview-card--clima">
      <header>
        <h3>Clima hoy en CABA</h3>
        <p className="home-preview-meta">Datos actualizados por Open-Meteo</p>
      </header>

      {loading && <p className="home-preview-status">Cargando clima...</p>}

      {error && !loading && <p className="home-preview-status">{error}</p>}

      {!loading && !error && current && (
        <div className="home-preview-body">
          <div className="home-preview-temperatures">
            <span className="home-preview-temperature">{current.temperature.toFixed(1)}°C</span>
            <p>Sensación general • Viento {current.windspeed.toFixed(0)} km/h</p>
          </div>
          {today && (
            <ul className="home-preview-list">
              <li>
                <span>{formatDate(today.date)}</span>
                <strong>
                  {today.max?.toFixed(1)}° / {today.min?.toFixed(1)}°
                </strong>
              </li>
            </ul>
          )}
        </div>
      )}

      <div className="home-preview-actions">
        <Link to="/clima" className="home-preview-link">
          Ver pronóstico completo
        </Link>
      </div>
    </article>
  );
};

export default ClimaPreview;
