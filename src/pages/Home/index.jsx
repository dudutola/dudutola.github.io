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
        <h1>Mes Projets</h1>
        <div className="cards">
          {projects.map((project, index) => (
            <Projects
              key={index}
              name={project.name}
              src={project.src}
              alt={project.alt}
              figcaption={project.figcaption}
              github={project.github}
              site={project.site}
              description={project.description}
              tools={project.tools}
            />
          ))}
        </div>
        <button className="btn" onClick={handleShowAll}>
          {showAll ? "Voir moins" : "Voir plus"}
        </button>
      </section>
      <section className="skills" id="my-skills">
        <h1>Skills</h1>
        <Skills />
      </section>
      <section className="contact" id="my-contact">
        <h1>Contact</h1>
        <Contact />
      </section>
    </main>
  );
};
