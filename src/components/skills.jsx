import React from 'react';
import '../skills.css';
import { logEvent } from '../analytics';

const Skills = () => {
  const skills = [
    { name: "HTML", icon: "📝" },
    { name: "CSS", icon: "🎨" },
    { name: "Javascript", icon: "✨" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "Reactjs", icon: "⚛️" },
    { name: "Nodejs", icon: "🌲" },
    { name: "MongoDB", icon: "🍃" },
    { name: "SQL", icon: "🗄️" },
    { name: "C", icon: "💻" },
    { name: "VUE.js", icon: "🖼️" },
    { name: "Git", icon: "🔧" },
  ];

  return (
    <div className="skills" id='skills'>
      <h1>My Skills</h1>
      <div className="skills-grid">
        {skills.map((skill) => (
          <div
            className="skill-card"
            key={skill.name}
            onClick={() => logEvent("Skill", "Click", skill.name)}
          >
            <span className="skill-icon">{skill.icon}</span>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
