import { useState } from "react";
import { Banner } from "../../components/Banner";
import { Projects } from "../../components/Projects";
import { Skills } from "../../components/Skills";
import { Contact } from "../../components/Contact";
import projectsData from "../../data/projectsData.json";
import "../../styles/pages/_home.scss";

export const Home = () => {
  // only show 4
  const [projects, setProjects] = useState(projectsData.slice(0, 4));
  const [showAll, setShowAll] = useState(false);

  const handleShowAll = () => {
    setShowAll(!showAll);
    if (!showAll) {
      // show all
      setProjects(projectsData);
    } else {
      // show only the first 4
      setProjects(projectsData.slice(0, 4));
    }
  }

  return (
    <main>
      <Banner />
      <section className="projects">
        <h1>My Projects</h1>
        <div className="cards">
          {projects.map((project, index) => (
            <Projects
              key={index}
              src={project.src}
              figcation={project.figcation}
            />
          ))}
        </div>
        <button onClick={handleShowAll}>
          {showAll ? "Show Less" : "Show More"}
        </button>
      </section>
      <section className="skills">
        <h1>Skills</h1>
        <Skills />
      </section>
      <section className="contact">
        <h1>Contact me</h1>
        <Contact />
      </section>
    </main>
  );
};