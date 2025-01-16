"use client";
import Image from "next/image";
import React, { JSX, useState } from "react";
import { cn } from "@/lib/util";

import { FaGithub } from "react-icons/fa";
import { SiPython, SiTypescript, SiPrisma, SiSupabase, SiNextdotjs, SiGo } from "react-icons/si";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    // Map tech stack to icons
    const techIcons: Record<string, JSX.Element> = {
      Python: <SiPython />,
      TypeScript: <SiTypescript />,
      prisma: <SiPrisma />,
      Supabase: <SiSupabase />,
      NextJs: <SiNextdotjs />,
      Golang: <SiGo />,
    };

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        className={cn(
          "rounded-lg relative bg-amber-100 overflow-hidden h-48 md:h-64 w-full transition-all duration-300 ease-out flex items-center justify-center",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]",
          hovered === index && "hover:scale-105" // Add scale effect on hover
        )}
      >
        <div className="text-center space-y-10">
          {/* Title */}
          <div className="text-xl text-black md:text-3xl font-bold">{card.title}</div>

          {/* Tech Stack */}
          <div className="flex justify-center space-x-4 text-black text-lg">
            {card.techstack.map((tech: string, idx: number) => (
              <div key={idx} className="flex items-center space-x-2">
                {techIcons[tech] || <span>{tech}</span>}
              </div>
            ))}
          </div>

          {/* Know More Button */}
          {card.githubLink?.length > 0 && (
            <a
              href={card.githubLink[0]}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800 transition-colors inline-block"
            >
              <FaGithub className="inline-block mr-2" />
              Know More
            </a>
          )}
        </div>
      </div>
    );
  }
);

  

  

Card.displayName = "Card";

type Card = {
    title: string;
    techstack: string[];
    githubLink: string[];
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
