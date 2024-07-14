import { useState } from "react";
import { Banner } from "../../components/Banner";
import { Projects } from "../../components/Projects";
import projectsData from "../../data/projectsData.json";

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
      <section>
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
      <section className="drie">
        <h1>naar jouw haus</h1>
      </section>
      <section className="vijf">
        <h1>mijn haus</h1>
      </section>
    </main>
  );
};
