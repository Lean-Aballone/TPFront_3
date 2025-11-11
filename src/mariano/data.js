import heroImg from "../assets/img/kity.jpeg";

export const sectionLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#filosofia", label: "Filosofía" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#intereses", label: "Intereses" },
  { href: "#inspiracion", label: "Inspiración" },
  { href: "#curiosidades", label: "Curiosidades" },
];

export const heroData = {
  image: heroImg,
  alt: "Avatar de Mariano",
  name: "Mariano Fabián G",
  residence: "Morón, Buenos Aires",
  age: "51 años",
  education: "Estudiante de la Tecnicatura en Desarrollo de Software",
  summary:
    "Entusiasta del desarrollo de software con raíces en la lógica y la matemática, dando sus primeros pasos en el universo del frontend.",
};

export const philosophyData = {
  title: "Mi Filosofía",
  paragraphs: [
    "Siempre he creído que la curiosidad es el verdadero motor del conocimiento. Mi pasión por la matemática no es solo sobre números; es sobre encontrar la lógica y la elegancia en sistemas complejos. Esa misma pasión me llevó al mundo del desarrollo de software, primero con lenguajes estructurados como Java y C#, y ahora sumergiéndome en el dinámico universo del front-end.",
    "Cuando no estoy frente a una pantalla, probablemente me encuentres explorando nuevos documentales, planeando mi próxima estrategia en algún videojuego retro, o simplemente disfrutando de la compañía de mi gato, Milo.",
  ],
};

export const skillsData = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "Git & GitHub",
  "Java",
  "C#",
  "Resolución de Problemas",
  "Lógica Matemática",
];

export const interestsData = [
  {
    title: "Cine",
    items: ["Matrix", "Guardianes de alta mar", "La sociedad de los poetas muertos"],
  },
  {
    title: "Música",
    items: ["Jazz", "Electro", "House"],
  },
  {
    title: "Hobbies",
    items: ["Videojuegos Retro", "Documentales de Ciencia", "Tutorías de Matemáticas"],
  },
];

export const quoteData = {
  text: "La curiosidad es mi motor de aprendizaje.",
};

export const curiositiesData = [
  {
    title: "Último documental",
    description:
      "“Cosmos: A Spacetime Odyssey”. Fascinado por cómo explica conceptos complejos con claridad exquisita.",
  },
  {
    title: "Juego retro en curso",
    description:
      "Metroid (NES). Explorando cada rincón del mapa para mejorar tiempos en speedruns casuales.",
  },
  {
    title: "Milo, el compañero felino",
    description:
      "Fanático de dormir sobre el teclado. Recordatorio constante de que las pausas activas son necesarias.",
  },
  {
    title: "Tip matemático del momento",
    description:
      "Los números primos no son tan solitarios: cualquier entero >1 es combinación única de ellos. Fundamento clave para criptografía.",
  },
];
