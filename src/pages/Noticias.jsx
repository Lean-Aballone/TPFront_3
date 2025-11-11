import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import "./apiSections.css";

const API_URL = "https://www.rtve.es/api/noticias.json?size=20";

const fallbackEntities = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#34;": '"',
  "&#39;": "'",
  "&#96;": "`",
  "&#160;": " ",
  "&nbsp;": " ",
  "&ldquo;": "“",
  "&rdquo;": "”",
  "&lsquo;": "‘",
  "&rsquo;": "’",
  "&hellip;": "…",
  "&ndash;": "–",
  "&mdash;": "—",
  "&aacute;": "á",
  "&eacute;": "é",
  "&iacute;": "í",
  "&oacute;": "ó",
  "&uacute;": "ú",
  "&ntilde;": "ñ",
  "&uuml;": "ü",
  "&Aacute;": "Á",
  "&Eacute;": "É",
  "&Iacute;": "Í",
  "&Oacute;": "Ó",
  "&Uacute;": "Ú",
  "&Ntilde;": "Ñ",
};

const decodeEntities = (text = "") => {
  if (!text) return "";

  if (typeof window !== "undefined" && typeof window.DOMParser !== "undefined") {
    try {
      const parser = new DOMParser();
      const decoded = parser
        .parseFromString(`<!doctype html><body>${text}`, "text/html")
        .body.textContent;
      if (decoded) return decoded;
    } catch (error) {
      // Ignoramos errores y usamos el fallback manual
    }
  }

  return text.replace(/&[a-zA-Z0-9#]+;/g, (entity) => fallbackEntities[entity] ?? entity);
};

const stripHtml = (text = "") => text.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

const parseDateString = (value = "") => {
  const [datePart, timePart = "00:00:00"] = value.split(" ");
  const [day, month, year] = datePart.split("-").map(Number);
  const [hour = 0, minute = 0, second = 0] = timePart.split(":").map(Number);

  if ([day, month, year].some((n) => Number.isNaN(n))) return NaN;

  return Date.UTC(year, (month || 1) - 1, day || 1, hour || 0, minute || 0, second || 0);
};

const resolveTimestamp = (article = {}) => {
  if (typeof article.publicationDateTimestamp === "number" && Number.isFinite(article.publicationDateTimestamp)) {
    return article.publicationDateTimestamp;
  }

  if (typeof article.publicationDate === "string") {
    const parsed = parseDateString(article.publicationDate);
    if (Number.isFinite(parsed)) return parsed;
  }

  return NaN;
};

const sanitizeArticles = (items = [], limit = 9) => {
  const now = Date.now() + 2 * 24 * 60 * 60 * 1000; // toleramos hasta dos días hacia adelante

  return items
    .filter((item) => {
      const timestamp = resolveTimestamp(item);
      return Number.isFinite(timestamp) && timestamp <= now;
    })
    .sort((a, b) => resolveTimestamp(b) - resolveTimestamp(a))
    .slice(0, limit);
};

const truncate = (text, maxLength = 200) => {
  if (!text) return "Sin descripción disponible.";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
};

const cleanText = (text = "") => decodeEntities(stripHtml(text));

const formatDate = (article) => {
  const timestamp = resolveTimestamp(article);

  if (Number.isFinite(timestamp)) {
    return new Intl.DateTimeFormat("es-AR", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(new Date(timestamp));
  }

  if (typeof article?.publicationDate === "string") {
    return article.publicationDate;
  }

  return "Fecha no disponible";
};

const Noticias = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    const fetchArticles = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL, { signal: controller.signal });
        if (!response.ok) {
          throw new Error("No pudimos obtener las noticias.");
        }
        const data = await response.json();
        const sanitized = sanitizeArticles(data?.page?.items, 9);
        setArticles(sanitized);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("Ocurrió un problema al cargar las noticias. Intenta nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => controller.abort();
  }, []);

  return (
    <main className="api-page">
      <div className="api-page__inner">
        <header className="api-page__header">
          <h1>Noticias destacadas en español</h1>
          <p>
            Seleccionamos las últimas novedades publicadas por RTVE para practicar la integración con APIs públicas.
            Cada tarjeta enlaza a la nota original para seguir leyendo.
          </p>
        </header>

        {loading && <div className="api-page__status">Buscando noticias frescas...</div>}

        {error && !loading && <div className="api-page__status">{error}</div>}

        {!loading && !error && (
          <section className="api-card-grid api-grid--images">
            {articles.map((article) => {
              const image = article.image || article.imageSEO;
              const articleLink = article.htmlUrl || article.htmlShortUrl || article.uri;
              const description = article.summary || article.frontSummary || article.text || "";
              const category = decodeEntities(article.mainCategory ?? article.sign?.firma ?? "RTVE Noticias");
              const title = decodeEntities(article.title ?? "Sin título");
              const summary = truncate(cleanText(description));

              return (
                <article key={article.id ?? article.uri} className="api-card">
                  {image && (
                    <img
                      src={image}
                      alt={title}
                      className="api-card__image"
                      loading="lazy"
                    />
                  )}
                  <div className="api-card__content">
                    <span className="api-card__tag">{category}</span>
                    <h2 className="api-card__title">{title}</h2>
                    <p className="api-card__meta">Publicado: {formatDate(article)}</p>
                    <p className="api-card__body">{summary}</p>
                    {articleLink && (
                      <div className="api-card__actions">
                        <a
                          className="api-card__link"
                          href={articleLink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver artículo completo
                        </a>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </section>
        )}
      </div>
      <Footer />
    </main>
  );
};

export default Noticias;
