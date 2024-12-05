import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";
import Link from "next/link";

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
        <h3 className="text-2xl font-bold capitalize sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-slideGreen dark:text-primaryDark"
            href={companyLink}
            target={"_blank"}
          >
            @{company}
          </a>
        </h3>
        <span className="font-medium capitalize text-dark/75 dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="w-full font-medium text-justify md:text-sm"> {work}</p>
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
      <h2 className="w-full mb-32 font-bold text-center text-8xl md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-primaryDark shadow-3xl 
            origin-top  dark:bg-primaryDark dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="flex flex-col items-start justify-between w-full ml-4 xs:ml-2">
          <Details
            position="Business Process Automation Engineer"
            company="Braincore.id"
            time="Jan 2024 - Present"
            address="Jakarta, Indonesia (Freelance)"
            companyLink="https://github.com/lilxyzz/clay-theme"
            work="At Stellar Innovations, I serve as a web developer, where I play a crucial role in designing and implementing cutting-edge web solutions. My responsibilities include developing responsive and high-performance websites and applications using technologies such as HTML, CSS, JavaScript, React, and Node.js. I collaborate closely with cross-functional teams to ensure our projects meet the highest standards of functionality and user experience. One of my key achievements at Stellar Innovations has been leading the development of a comprehensive e-commerce platform that significantly enhanced our client's online presence and sales. My work is driven by a passion for continuous learning and innovation, always striving to push the boundaries of what's possible in web development."
          />

          <Details
            position="Mobile Development Cohort"
            company="Bangkit Academy 2023 Batch 2"
            time="Aug 2023 - Dec 2023"
            address="Jakarta, Indonesia (Remote)"
            companyLink="https://github.com/lilxyzz/holo-theme"
            work="At Vault Technologies, I worked as a RAD (Rapid Application Development) Tester, where I was responsible for ensuring the quality and functionality of our software applications during the development process. My role involved designing and executing test plans, identifying and documenting bugs, and working closely with developers to resolve issues quickly. This position required a deep understanding of the software development lifecycle and a keen eye for detail to ensure our applications met the highest standards of performance and reliability. My contributions at Vault Technologies helped streamline our development processes and significantly improved the overall quality of our software products."
          />

          <Details
            position="Pengembangan Front-End Web dan Back-End"
            company="Dicoding X Kampus Merdeka Cycle 4"
            time="Jan 2023 - Jun 2023"
            address="Jakarta, Indonesia (Remote)"
            companyLink="https://github.com/lilxyzz/holo-theme"
            work="At Vault Technologies, I worked as a RAD (Rapid Application Development) Tester, where I was responsible for ensuring the quality and functionality of our software applications during the development process. My role involved designing and executing test plans, identifying and documenting bugs, and working closely with developers to resolve issues quickly. This position required a deep understanding of the software development lifecycle and a keen eye for detail to ensure our applications met the highest standards of performance and reliability. My contributions at Vault Technologies helped streamline our development processes and significantly improved the overall quality of our software products."
          />
        </ul>
      </div>
      <div className="flex items-center justify-between grid-cols-2 gap-3 mt-40">
        <Link
          href="/projects/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Projects
        </Link>
        <Link
          href="/articles/"
          target={"_self"}
          className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
        >
          View Articles
        </Link>
      </div>
    </div>
  );
};

export default Experience;
