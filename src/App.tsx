import "./App.css";
import { Profile } from "./components/Profile";
import { ProjectCard } from "./components/ProjectCard";
import { Github, Linkedin } from "lucide-react";
import profilePic from "./assets/kimzii.png";
import { LanguageCard } from "./components/LanguageCard";
import { Resume } from "./components/Resume";
import { TechCard } from "./components/TechCard";

function App() {
  return (
    <>
      <div className="max-w-[700px] p-20 flex flex-col fixed">
        <Profile />
        <div className="flex gap-6 items-center font-extralight ">
          <img
            src={profilePic}
            alt="kimzii"
            className="w-[50px] rounded-full"
          />
          <div className="flex gap-2 hover:text-highlight transition">
            <Github size={18} />
            <a
              className="hover:text-highlight transtion"
              href="https://github.com/kimzii"
            >
              Github
            </a>
          </div>

          <div className="flex gap-2 hover:text-highlight transition">
            <Linkedin size={18} />
            <a
              className="hover:text-highlight transtion"
              href="linkedin.com/in/kimzietorres"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="w-[1440px] flex">
        <div className="w-1/2 flex flex-col gap-10 p-20 justify-end ml-[720px]">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Projects</h1>
            <ProjectCard
              title="Adidas Dashboard"
              description="A dashboard analyzing the sales for Adidas, built using R Shiny."
              language="R SHINY"
              link="https://kimzii.shinyapps.io/Adidas_Dashboard/"
            />

            <ProjectCard
              title="Imperate Website"
              description="A website for a real estate company called Imperate Ph, designed to showcase their properties and services."
              language="TYPESCRIPT"
              link="https://www.imperateph.com/"
            />

            <ProjectCard
              title="Empower Prolink"
              description="A website for a virtual agency company called Empower Prolink, designed to showcase their services and portfolio."
              language="TYPESCRIPT"
              link="https://va-website-dun.vercel.app/"
            />
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl">Skills & Technologies</h1>
            <LanguageCard />
            <TechCard />
          </div>

          <div>
            <h1 className="text-2xl">Resume</h1>
            <Resume />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
