export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "idea" | "in-progress" | "paused" | "done";
  repoUrl?: string;
};

export const projects: Project[] = [
  {
    id: "learn-jawi",
    name: "Learn Jawi",
    tagline: "An interactive app to learn the Jawi script.",
    description:
      "Jawi is the Arabic-script writing system used for the Malay language. This app aims to make learning Jawi approachable through bite-sized lessons, handwriting practice, and quizzes — similar to how Duolingo handles language learning.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    status: "idea",
  },
  {
    id: "pokemart",
    name: "Pokemart",
    tagline: "A Pokémon item shop simulator.",
    description:
      "A fun e-commerce mock-up themed around the Pokémon world. Browse items, manage a cart, and check out — all backed by static data and client-side state.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    status: "idea",
  },
  {
    id: "spd-wiki",
    name: "SPD Wiki",
    tagline: "A fan wiki for a game / series.",
    description:
      "A community-style wiki for cataloguing lore, characters, and mechanics. Focused on clean information architecture and fast search.",
    stack: ["Next.js", "TypeScript", "MDX"],
    status: "idea",
  },
  {
    id: "battleship",
    name: "Battleship",
    tagline: "Classic Battleship game in the browser.",
    description:
      "A fully playable Battleship game with a computer opponent. Covers grid-based state management, AI turn logic, and clean game-loop architecture.",
    stack: ["React", "TypeScript"],
    status: "idea",
  },
  {
    id: "chess-note",
    name: "Chess Note",
    tagline: "Annotate and replay chess games.",
    description:
      "A tool for chess players to record games in PGN notation, add move annotations, and replay them move by move on an interactive board.",
    stack: ["React", "TypeScript", "chess.js"],
    status: "idea",
  },
  {
    id: "todo-app",
    name: "TODO App",
    tagline: "A minimal, keyboard-driven task manager.",
    description:
      "A no-frills TODO app with a focus on keyboard shortcuts and fast capture. Data persists locally in the browser. Built as a baseline for exploring state management patterns.",
    stack: ["React", "TypeScript", "Tailwind CSS"],
    status: "idea",
  },
];
