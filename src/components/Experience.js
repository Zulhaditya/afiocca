import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
} from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ jobDesk, years, company, address, description }) => {
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
          {jobDesk}{" "}
          <a
            className="capitalize text-primary dark:text-primaryDark"
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {years} | {address}
        </span>
        <p className="font-medium w-full md:text-sm"> {description}</p>
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
  const [experienceData, setExperienceData] = useState([]);

  useEffect(() => {
    // Fetch experience data from the server
    fetch("/api/resume/experience") // Ganti dengan endpoint API yang sesuai
      .then((response) => response.json())
      .then((data) => setExperienceData(data.experience))
      .catch((error) => console.error("Error fetching experience data:", error));
  }, []);

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
          {experienceData.map((experience, index) => (
            <Details
              key={index}
              jobDesk={experience.jobDesk}
              company={experience.company}
              years={experience.years}
              address={experience.address}
              description={experience.description}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
