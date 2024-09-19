import React from 'react';

const skills = [
  { name: 'React', image: '/logos/react.png' },
  { name: 'Next.js', image: '/logos/Nextjs.png' },
  { name: 'Java', image: '/logos/Java.png' },
  { name: 'Python', image: '/logos/Python.png' },
  { name: 'JavaScript', image: '/logos/javascript.png' },
  { name: 'TypeScript', image: '/logos/Typescript.png' },
  { name: 'C++', image: '/logos/C++.png' },
  { name: 'C', image: '/logos/C.png' },
  { name: 'Azure', image: '/logos/Azure.png' },
  { name: 'Xamarin', image: '/logos/Xamarin.png' },
  { name: 'Node.js', image: '/logos/Node.js.png' },
  { name: 'Git', image: '/logos/Git.png' },
  { name: 'Ionic', image: '/logos/Ionic.png' },
  { name: 'MongoDB', image: '/logos/MongoDB.png' },
  { name: 'MySQL', image: '/logos/MySQL.png' },
  { name: 'PostgreSQL', image: '/logos/Postgresql.png' },
  { name: 'NumPy', image: '/logos/NumPy.png' },
  { name: 'Express', image: '/logos/Express.png' },
  { name: 'CSS', image: '/logos/CSS.png' },
  { name: 'Tailwind', image: '/logos/Tailwind.png' },
  { name: 'Bootstrap', image: '/logos/Bootstrap.png' },
  { name: 'Ubuntu', image: '/logos/Ubuntu.png' },
];

const Skills = () => {
  return (
    <section id="skills" className="bg-blackCustom text-goldCustom py-12 md:mx-20 p-10">
      <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
      <div className="skills-marquee">
        <div className="skills-content">
          {[...skills, ...skills].map((skill, index) => (
            <div key={index} className="skill-card">
              <img src={skill.image} alt={skill.name} className="skill-image" />
              <p className="mt-2 text-center font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
