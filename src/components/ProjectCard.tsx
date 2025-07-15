import "../App.css";
import { SquareArrowOutUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  language: string;
  link: string;
}

export const ProjectCard = ({
  title,
  description,
  language,
  link,
}: ProjectCardProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition transform hover:scale-[1.01] hover:shadow-lg hover:text-highlight"
    >
      <div className="p-10 bg-primary flex justify-between gap-1 rounded cursor-pointer">
        <div>
          <p className="font-semibold text-sm">{language}</p>
          <h2 className="font-semibold text-lg">{title}</h2>
          <p className="font-extralight text-sm">{description}</p>
        </div>

        <SquareArrowOutUpRight className="hover:text-highlight" size={16} />
      </div>
    </a>
  );
};
