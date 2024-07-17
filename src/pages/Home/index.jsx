import { useState } from "react";
import { Banner } from "../../components/Banner";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";
import { Contact } from "../../components/Contact";
import projectsData from "../../data/projectsData.json";
import "../../styles/pages/_home.scss";

export const Home = () => {
  const [projects, setProjects] = useState(projectsData.slice(0, 4));
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      setProjects(projectsData);
    } else {
      setProjects(projectsData.slice(0, 4));
    }
  }

  return (
    <main>
      <Banner />
      <section className="projects" id="my-projects">
        <h1>My Projects</h1>
        <div className="cards">
          {projects.map((project, index) => (
            <Projects
              key={index}
              src={project.src}
              figcaption={project.figcaption}
            />
          ))}
        </div>
        <button onClick={handleShowAll}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </section>
      <section className="skills" id="my-skills">
        <h1>Skills</h1>
        <Skills />
      </section>
      <section className="contact" id="contact-me">
        <h1>Contact me</h1>
        <Contact />
      </section>
    </main>
  );
};
