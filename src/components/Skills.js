import { motion } from "framer-motion";
import React, { useRef, useState, useEffect } from "react";

const Skill = ({ name, x, y }) => {

  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x, y }}
      whileInView={{ x, y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
      className="cursor-pointer w-max origin-center absolute 
       font-semibold bg-dark text-light py-3 px-6 rounded-full dark:bg-light dark:text-dark
       lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3  xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold
       "
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const [skills, setSkills] = useState([])

  useEffect(() => {
    // Fetch skills data from the server
    fetch("/api/resume/skills")
      .then((response) => response.json())
      .then((data) => setSkills(data.skills))
      .catch((error) => console.error("Error fetching skills:", error));
  }, []);

  function getRandomValue(min, max) {
    return Math.random() * (max - min) + min;
  }

  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      <div
        ref={ref}
        className="w-full h-[100vh] relative bg-circularLight dark:bg-circularDark  flex items-center justify-center 
      mb-64 md:mb-32 rounded-full
      lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd 
      sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
      "
      >

        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer flex rounded-full font-semibold bg-dark text-light p-8 shadow-dark
        dark:bg-light dark:text-dark lg:p-6 md:p-4 xs:text-xs xs:p-2
        ">
          Skills
        </motion.div>

        {skills.map((skill, index) => (
          <Skill
            key={index}
            name={skill.skillName}
            x={`${getRandomValue(-30, 30)}vw`}
            y={`${getRandomValue(-20, 20)}vw`}
          />
        ))}
      </div></>
  );
};

export default Skills;
