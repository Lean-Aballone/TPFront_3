import heroImg from "../assets/img/gonzalo-profile.jpg";

export const sectionLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#peliculas", label: "Películas" },
  { href: "#musica", label: "Música" },
  { href: "#contacto", label: "Contacto" },
];

export const heroData = {
  image: heroImg,
  alt: "Retrato de Gonzalo trabajando frente a su laptop",
  location: "Tucumán, ARG",
  title: "Gonzalo - 36 años",
  subtitle: "Full Stack Developer",
  description:
    "Desarrollador Full Stack con 4+ años construyendo aplicaciones web de alto impacto. Especializado en stack MERN y Next.js.",
  meta: [
    { label: "Experiencia", value: "4+ años" },
    { label: "Stack actual", value: "MERN · Next.js · CI/CD" },
    { label: "Disponibilidad", value: "Freelance / Remoto" },
  ],
};

export const aboutData = {
  lead:
    "Enfoque en arquitectura backend, bases de datos e infraestructura para lograr escalabilidad, seguridad y rendimiento.",
  body:
    "Actualmente diseño y desarrollo el sistema de aplicaciones para una organización con más de 120 usuarios activos diarios. Me muevo cómodo entre el backend y el frontend, priorizando código mantenible y centrado en el usuario.",
  timeline: [
    {
      datetime: "2020",
      date: "2020 — Presente",
      title:
        "Desarrollador de software · Full-stack (enfoque en backend) — Organismo gubernamental",
      description:
        "Diseño de arquitectura, backend y datos para webApp (+120 usuarios/día).",
    },
    {
      datetime: "2023",
      date: "2023",
      title: "Global Learning",
      description:
        "Proyectos intensivos con JavaScript y React avanzado combinados con IA, aplicados a problemas reales.",
    },
    {
      datetime: "2015",
      date: "2015 — 2019",
      title: "Administrador de Redes — Ministerio de Educación",
      description:
        "Gestión de infraestructura de red y soporte técnico a equipos educativos.",
    },
  ],
};

export const skillsData = [
  {
    label: "HTML + CSS Architecture",
    level: "Nivel experto",
    progress: 0.95,
  },
  {
    label: "TypeScript & React",
    level: "Nivel avanzado",
    progress: 0.9,
  },
  {
    label: "Accesibilidad AA/AAA",
    level: "Nivel avanzado",
    progress: 0.85,
  },
  {
    label: "Design Ops & Sistemas",
    level: "Nivel sólido",
    progress: 0.8,
  },
  {
    label: "Motion design suave",
    level: "Nivel intermedio",
    progress: 0.75,
  },
];

export const moviesData = [
  {
    title: "Black Hawk Down",
    info: "Ridley Scott • 2001",
  },
  {
    title: "Top Gun: Maverick",
    info: "Joseph Kosinski • 2022",
  },
  {
    title: "Star Wars: Episodio I – La amenaza fantasma",
    info: "George Lucas • 1999",
  },
];

export const musicData = [
  {
    title: "In the End",
    description:
      "Himno nu-metal con piano hook; entra suave y mantiene foco. (Hybrid Theory • 2000)",
  },
  {
    title: "Numb",
    description:
      "Melódico y directo; perfecto para cerrar sprints. (Meteora • 2003)",
  },
  {
    title: "Faint",
    description:
      "Rápido y enérgico; sube el pulso y el ritmo. (Meteora • 2003)",
  },
];

export const contactData = {
  email: "gonzaloalejandro720@gmail.com",
  linkedin: "https://www.linkedin.com/in/gonzalo-villafane/",
  alias: "in/gonzalo-villafane/",
  availability: "Disponible en horario GMT-3 · Español / Inglés",
};
