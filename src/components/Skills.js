import { motion } from "framer-motion";
import React, { useRef } from "react";


const Skill = ({ name, x, y }) => {
  const ref = useRef(null);
  return (
    <motion.div
      ref={ref}
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
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

        <Skill name="Ansi C" x="-20vw" y="2vw" />
        <Skill name="Lader Logic" x="-5vw" y="-10vw" />
        <Skill name="Python" x="20vw" y="6vw" />
        <Skill name="ROS2" x="0vw" y="12vw" />
        <Skill name="C++" x="-20vw" y="-15vw" />
        <Skill name="Onshape" x="15vw" y="-12vw" />
        <Skill name="Soldering" x="-35vw" y="-5vw" />
        <Skill name="Rslogix" x="32vw" y="-5vw" />
        <Skill name="AutoCAD" x="0vw" y="-20vw" />
        <Skill name="Eagle" x="-25vw" y="18vw" />
        <Skill name="SolidWorks" x="28vw" y="18vw" />
      </div></>
  );
};

export default Skills;
