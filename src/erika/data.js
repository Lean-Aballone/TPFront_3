import heroImg from "../assets/img/chikis.jpg";

export const sectionLinks = [
  { href: "#sobre-mi", label: "Sobre mí" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#favoritos", label: "Favoritos" },
  { href: "#musica", label: "Música" },
  { href: "#contacto", label: "Contacto" },
  { href: "#accion", label: "Acciones" },
];

export const aboutData = {
  image: heroImg,
  alt: "Erika observando auroras sobre la ciudad",
  location: "San Miguel de Tucumán",
  summary:
    "Hola, soy Erika. tengo 37 años y actualmente resido en San Miguel de Tucumán. Estoy cursando la carrera de Técnico Superior en Desarrollo de Software, la cual me encuentro muy cerca de finalizar, con el anhelo de recibirme pronto si Dios quiere.",
  paragraphs: [
    "Soy una persona familiera, amigable y comprometida, que disfruta compartir momentos con sus seres queridos. Amo a los animales, especialmente a los perros; convivo con cuatro de ellos, todos de gran tamaño, que representan un desafío en cuanto a cuidados y gastos, pero también una fuente de alegría y compañía diaria.",
    "En el plano profesional, me desempeño en dos ámbitos:",
    "Lynxit (modalidad freelance): comencé trabajando en proyectos de Frontend y, gracias a la confianza depositada en mí, hoy también asumo tareas de Backend, lo que me ha permitido ampliar mis conocimientos y fortalecer mi perfil Full-Stack.",
    "Secretaría de Seguridad: me desempeño como Líder Tech, coordinando y guiando procesos tecnológicos para mejorar soluciones y resultados en el área.",
    "Me caracterizo por ser una persona con espíritu de superación, capacidad de adaptación y pasión por la tecnología, siempre dispuesta a aprender y asumir nuevos retos.",
  ],
};

export const skillsData = [
  "React.js",
  "Next.js",
  "JavaScript",
  "Tailwind CSS",
  "Zustand",
  "Node.js",
  "Express",
  "PostgreSQL",
  "GitHub",
  "OpenAI API",
  "Google Maps API",
];

export const favoritesData = [
  {
    title: "Atrápame si puedes",
    detail: "Ingenio, estafas y persecuciones con toques de humor.",
  },
  {
    title: "Mentes brillantes",
    detail: "Genialidad y lucha personal contra la adversidad.",
  },
  {
    title: "Moulin Rouge",
    detail: "Pasión, música y un amor tan intenso como trágico.",
  },
];

export const musicData = [
  {
    artist: "Imagine Dragons",
    songs: ["Radioactive", "Demons", "Believer"],
  },
  {
    artist: "Queen",
    songs: ["Bohemian Rhapsody", "Don’t Stop Me Now", "We Will Rock You"],
  },
  {
    artist: "José Luis Perales",
    songs: ["¿Y cómo es él?", "Te quiero", "Un velero llamado libertad"],
  },
];

export const contactData = {
  intro:
    "¿Tenemos un reto de interfaz que necesite claridad? Me encanta conversar con equipo multidisciplinario y co-crear soluciones.",
  email: "erikajohanacruzvallejo@gmail.com",
  linkedin: {
    href: "https://www.linkedin.com/in/erika-johana-cruz-vallejo/",
    label: "LinkedIn",
  },
};

export const actionLinks = [
  { href: "/", label: "← Volver a portada" },
  { href: "/bitacora", label: "📝 Ver bitácora" },
  { href: "#top", label: "↑ Ir arriba" },
];
