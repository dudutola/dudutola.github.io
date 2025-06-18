import "../../styles/components/_skills.scss";
import git from "../../images/git.png";
import vsc from "../../images/vsc.webp";
import figma from "../../images/Figma-logo.svg";
import github from "../../images/GitHubLogo.svg";

export const Skills = () => {

  const languages = [
    // {
    //   name: 'Html',
    //   image: '/img/html.png',
    // },
    // {
    //   name: 'Css',
    //   image: '/img/css.png',
    // },
    {
      name: 'Ruby on Rails',
      image: '/img/ruby_on_rails.png',
    },
    {
      name: 'JS',
      image: '/img/js.png',
    },
    {
      name: 'Scss',
      image: '/img/sass.png',
    },
    {
      name: 'React',
      image: '/img/react.png',
    },
    {
      name: 'Redux',
      image: '/img/redux.png',
    }
  ];

  return (
    <>
      <div className="skills__cards">
          {languages.map((language, index) => {
            return <div className="card-skill" key={index}>
              <span>{language.name}</span>
              <img src={process.env.PUBLIC_URL + language.image} alt="" width={300} height={300} />
            </div>
          })}
      </div>
      <div className="tools">
        <h2>Tools</h2>
        <div className="tools__icons">
          <img src={git} alt="git" width="250" height="250" />
          <img src={vsc} alt="vsc" width="200" height="200" />
          <img src={figma} alt="figma" width="80" height="80" />
          <img src={github} alt="github" width="100" height="100" />
        </div>
      </div>
    </>
  )
};
