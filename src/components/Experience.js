import React, { useRef } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (

    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Robotic Test Engineer"
            company="Redzone Robotics"
            companyLink="https://google.com"
            time="October 2022 - Present"
            address="Warrendale, PA."
            work="Developing and implementing test plans, test cases, and test scripts to validate 
            robotic system functionality and performance. Such as utilizing image processing techniques 
            to assess camera quality and optimize image capturein robotic applications. 
            Creating testing fixtures to accurately and productively test circuit boards, custom cables, and software."
          />

          <Details
            position="Project Engineer"
            company="Richmond Engineering works"
            companyLink="https://google.com"
            time="September 2021 - October 2022"
            address="Robinson Township, PA."
            work="Responsible for the electrical drawing design and quality assurance processes, ensuring all electrical 
            designs are up to code. Such as Panel Designs, MCCs, Switch Gears, Conduit layout, Cable sizing, AC and DC Drives."
          />

          <Details
            position="Electrical Engineering Co-Op"
            company="Conair group"
            companyLink="https://google.com"
            time="September 2019 - April 2021"
            address="Cranberry Township, PA."
            work="Supervise New Product Development which includes: managing software development, communications 
            between systems, assembly process of products and electrical hardware design including Printed Circuit Board designs"
          />

          <Details
            position="Robotic Engineer"
            company="Panacea.Ag"
            companyLink="https://google.com"
            time="April 2019 - September 2020"
            address="Pittsburgh, PA."
            work="Team Lead for new product design for production and scalability of hardware unit and 
            Developed software stabilization and optimization for consumer use"
          />

          <Details
            position="Team Lead"
            company="X-Projects"
            companyLink="https://google.com"
            time="November 2018 - April 2019"
            address="University of Pittsburgh"
            work="Fully Automated Farming Robot designed for weed removal, watering, seed planting, and soil testing,
            Integrated 360˚ Lidar with hardware modifications to amplify and rectify UART signal communication, and
            Using C++ to develop a 2-Dimensional Tracking system for precision of movement with 360˚Lidar"
          />

          <Details
            position="Lead Engineering Intern"
            company="Mansco Products Inc."
            companyLink="https://google.com"
            time="June 2018 - January 2019"
            address="Warminster, PA."
            work="Developed advanced data analysis algorithm for curve fitting with graphical user interface using python, 
            to improve troubleshooting of user’s complications"
          />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
