import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = "https://www.rtve.es/api/noticias.json?size=12";

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
      // Fallback manual si falla el parser
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

const sanitizeArticles = (items = [], limit = 2) => {
  const now = Date.now() + 2 * 24 * 60 * 60 * 1000;

  return items
    .filter((item) => {
      const timestamp = resolveTimestamp(item);
      return Number.isFinite(timestamp) && timestamp <= now;
    })
    .sort((a, b) => resolveTimestamp(b) - resolveTimestamp(a))
    .slice(0, limit);
};

const formatDate = (article = {}) => {
  const timestamp = resolveTimestamp(article);

  if (Number.isFinite(timestamp)) {
    return new Intl.DateTimeFormat("es-AR", {
      day: "2-digit",
      month: "short",
    })
      .format(new Date(timestamp))
      .replace(".", "");
  }

  if (typeof article.publicationDate === "string") {
    return article.publicationDate.split(" ")[0] ?? "";
  }

  return "";
};

const truncate = (text, maxLength = 130) => {
  if (!text) return "Sin descripción disponible.";
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength).trim()}…`;
};

const cleanText = (text = "") => decodeEntities(stripHtml(text));

const NoticiasPreview = () => {
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
          throw new Error("Error al obtener noticias.");
        }
        const data = await response.json();
        const sanitized = sanitizeArticles(data?.page?.items, 2);
        setArticles(sanitized);
        setError(null);
      } catch (err) {
        if (err.name === "AbortError") return;
        setError("No pudimos cargar las noticias ahora.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();

    return () => controller.abort();
  }, []);

  return (
    <article className="home-preview-card home-preview-card--noticias">
      <header>
        <h3>Noticias en español</h3>
        <p className="home-preview-meta">Titulares recientes publicados por RTVE</p>
      </header>

      {loading && <p className="home-preview-status">Cargando noticias...</p>}

      {error && !loading && <p className="home-preview-status">{error}</p>}

      {!loading && !error && (
        <ul className="home-preview-list">
          {articles.map((article) => {
            const title = decodeEntities(article.title ?? "Sin título");
            const summary = truncate(
              cleanText(article.summary || article.frontSummary || article.text || "")
            );

            return (
              <li key={article.id ?? article.uri}>
                <span>{formatDate(article)}</span>
                <p>
                  <strong>{title}</strong>
                  <br />
                  {summary}
                </p>
              </li>
            );
          })}
        </ul>
      )}

      <div className="home-preview-actions">
        <Link to="/noticias" className="home-preview-link">
          Leer más noticias
        </Link>
      </div>
    </article>
  );
};

export default NoticiasPreview;
