import React from 'react'
import '../skills.css'

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "📝" },
    { name: "CSS", icon: "🎨" },
    { name: "Javascript", icon: "✨" },
    { name: "python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "Reactjs", icon: "⚛️" },
    { name: "Nodejs", icon: "🌲" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Sql", icon: "🗄️" },
    { name: "C", icon: "💻" },
    { name: "VUE.js", icon: "🖼️" },
    { name: "Git", icon: "🔧" },
  ];

  return (
    <div className="skills" id='skills'>
      <h1>my skills</h1>
       <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};


export default Skills

 