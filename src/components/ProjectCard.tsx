import "../App.css";

interface ProjectCardProps {
    title: string;
    description: string;
    language:string;
    link: string;
}

export const ProjectCard = ({title, description, language}: ProjectCardProps) => {
  return (
    <div className="p-10 bg-primary flex flex-col gap-1">
        <p className="font-semibold text-sm">{language}</p>
        <h2 className="font-semibold text-lg">{title}</h2>
        <p className="font-extralight text-sm">{description}</p>    
    </div>
  )
}
