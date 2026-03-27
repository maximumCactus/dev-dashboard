import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bio — MaximumCactus",
};

type QA = { question: string; answer: string[] };

const qas: QA[] = [
  {
    question: "Why are you called MaximumCactus?",
    answer: [
      "It comes from a random name generator I used while playing a word game called Wordament. It stuck.",
    ],
  },
  {
    question: "Who are you?",
    answer: [
      "A Backend Developer at heart. Logical, a little afraid of sunlight, and in awe of beautiful code.",
      "Since job titles are fluid these days, I also sometimes work as QA, DevOps, Frontend Dev, and Prompt Engineer.",
    ],
  },
  {
    question: "What is this website for?",
    answer: [
      "This is my personal portfolio — a page to showcase all the project ideas I've had but never had time to finish.",
      "Now, with the help of coding agents, I can more easily express those ideas.",
      'On GitHub this project is called "Dev Dashboard". Dev because I\'m a developer. Dashboard because it shows the status of all the projects I want to build.',
    ],
  },
];

export default function BioPage() {
  return (
    <main className="flex flex-1 items-center justify-center p-8">
      <div className="w-full max-w-2xl border-2 border-foreground rounded-sm p-10 flex flex-col gap-8">
        <div className="flex items-center justify-between">
          <h1 className="font-handwriting text-4xl font-bold">
            MaximumCactus~
          </h1>
          <Link
            href="/"
            className="text-xs font-mono uppercase tracking-widest text-foreground/50 hover:text-foreground transition-colors"
          >
            ← back
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {qas.map((qa) => (
            <div key={qa.question} className="flex flex-col gap-2">
              <p className="font-mono text-sm text-foreground/50 before:content-['>>_']">
                {qa.question}
              </p>
              <div className="flex flex-col gap-1 pl-4 border-l-2 border-foreground/20">
                {qa.answer.map((line, i) => (
                  <p key={i} className="text-sm leading-relaxed">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
