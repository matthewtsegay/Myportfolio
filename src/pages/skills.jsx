import React from "react";
import "../styles/skills.css";

const skills = [
  { name: "React.js", img: "/skills/react.svg" },
  { name: "vite", img: "/skills/vite.svg" },
  { name: "javascript", img: "/skills/javascript.svg" },
  { name: "django", img: "/skills/django-svgrepo-com.svg" },
  { name: "python", img: "/skills/python-svgrepo-com.svg" },
  { name: "php", img: "/skills/php-svgrepo-com.svg" },
  { name: "html5", img: "/skills/html5.svg" },
  { name: "css3", img: "/skills/css3.svg" },
];

const Skills = () => {
  return (
    <div className="container mt-5 text-center">
      <h1>My Skills</h1>
      <div className="row mt-4 bg-dark m-2">
        {skills.map((skill, index) => (
          <div key={index} className="col-md-3 m-5 bg-warning">
            <div className="card p-3 shadow-sm bg-light">
              <img src={skill.img} alt={skill.name} className="card-img-top skill-img" />
              <h5 className="mt-2 color-light">{skill.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
 
