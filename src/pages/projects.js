import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { HireMe2 } from "@/components/HireMe2";

import proj1 from "../../public/images/projects/bookshelf-apps-projects1.png";
import proj2 from "../../public/images/projects/notes-apps-project2.png";
import proj3 from "../../public/images/projects/music-apps-project3.png";
import proj4 from "../../public/images/projects/github-user-project4.png";
import proj5 from "../../public/images/projects/ngemeals-project5.png";
import proj6 from "../../public/images/projects/upload-images-project6.png";
import proj7 from "../../public/images/projects/ig-unfollowers-tracker-project7.png";
import loading from "../../public/images/articles/GTA6-VICE.gif";

import TransitionEffect from "@/components/TransitionEffect";
import { motion, useMotionValue } from "framer-motion";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target={"_blank"}
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="text-xl font-semibold capitalize hover:underline dark:text-light md:text-lg xs:text-base sm:self-start">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="flex relative justify-between p-4 py-6 my-2 w-full rounded-xl border border-r-4 border-b-4 border-solid sm:flex-col bg-light text-dark first:mt-0 border-dark dark:bg-dark dark:border-light"
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="pl-4 min-w-max font-semibold text-primary dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedProject = ({
  type,
  title,
  summary,
  img,
  link,
  github,
  tools,
}) => {
  return (
    <article className="flex relative justify-between items-center p-12 w-full rounded-3xl rounded-br-2xl border border-solid shadow-2xl border-dark bg-light dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        className="overflow-hidden w-1/2 rounded-lg cursor-pointer lg:w-full"
      >
        <FramerImage
          src={img}
          className="object-cover w-full h-auto"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex flex-col justify-between items-start pl-6 w-1/2 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-primary dark:text-light xs:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>
        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-4xl font-bold text-left lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 font-medium rounded-md text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="flex items-center mt-2">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            className="p-2 px-6 ml-4 text-lg font-semibold capitalize rounded-lg border-2 border-solid bg-dark sm:px-4 sm:text-base text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
            aria-label="Project link"
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, tools }) => {
  return (
    <article className="flex relative flex-col justify-center items-center p-6 w-full rounded-2xl rounded-br-2xl border border-solid shadow-2xl border-dark bg-light dark:border-light dark:bg-dark xs:p-4">
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]"
      />

      <Link
        href={link}
        className="overflow-hidden w-full rounded-lg cursor-pointer"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="flex flex-col justify-between items-start mt-4 w-full">
        <span className="text-xl font-medium text-primary dark:text-light lg:text-lg md:text-base">
          {type}
        </span>
        <span className="text-xl font-medium text-primaryDark dark:text-primaryDark xs:text-base">
          {tools}
        </span>

        <Link href={link} className="underline-offset-2 hover:underline">
          <h2 className="my-2 w-full text-3xl font-bold text-left lg:text-2xl">
            {title}
          </h2>
        </Link>
        <div className="flex justify-between items-center w-full">
          <Link
            href={link}
            className="px-6 py-2 mt-2 text-lg font-semibold capitalize rounded-lg border-2 border-solid bg-dark sm:px-4 sm:text-base text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
            aria-label={title}
          >
            View Project
          </Link>
        </div>
      </div>
    </article>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Bimss | Projects</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex flex-col justify-center items-center mb-16 w-full dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Transforms the World ✨"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                type="Front-End Web Development"
                tools="HTML | CSS | JavaScript"
                title="Bookshelf Apps Dicoding"
                img={proj1}
                date="2023"
                link="/projects/bookshelf-apps-dicoding"
                github="https://github.com/bimamib/Book-Shelf_Apps"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                tools="React | Tailwind CSS | Type Script"
                title="Notes Apps"
                img={proj2}
                date="2024"
                link="/projects/notes-apps-dicoding"
                github="https://github.com/bimamib/notes-app"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                tools="VueJS | Tailwind CSS | Firebase Auth & Database"
                title="Music Apps"
                img={proj3}
                date="2024"
                link="/projects/music-projects"
                github="https://github.com/bimamib/Vue-Learn/tree/main/music"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Mobile Development"
                tools="Kotlin | JSON | Material 3"
                title="Github User"
                img={proj4}
                date="2023"
                link="/projects/github-apps-projects"
                github="https://github.com/bimamib/Submission-Fundamental_Aplikasi-Android"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                tools="VueJS | API | TailwindCSS"
                title="Ngemeals"
                img={proj5}
                date="2023"
                link="/projects/ngemeals-projects"
                github="https://github.com/bimamib/ngemeals"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                tools="Next.js | Prisma | TailwindCSS | PostgreSQL"
                title="Upload Images"
                img={proj6}
                date="2024"
                link="/projects/upload-images-projects"
                github="https://github.com/bimamib/nextjs-upload"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Web Development"
                tools="Next.js | Shadcn UI | JSON"
                title="Instagram Unfollow Trackers"
                img={proj7}
                date="2025"
                link="/projects/ig-unfollowers-tracker-projects"
                github="https://github.com/bimamib/nextjs-upload"
              />
            </div>
          </div>

          <div>
            <ul className="flex relative flex-col items-center pt-16">
              <Article
                title="Adding more soon, thanks for the interest!"
                img={loading}
                time="1 min read"
                date=""
                link="https://github.com/bimamib"
              />
            </ul>

            <div className="flex grid-cols-2 gap-3 justify-between items-center mt-2">
              <Link
                href="/articles/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
            capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
            dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
            md:p-2 md:px-4 md:text-base
             `}
              >
                View Articles
              </Link>
              <Link
                href="/about/"
                target={"_self"}
                className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
              >
                Get To Know Me
              </Link>
            </div>
            <HireMe2 />
          </div>
        </Layout>
      </main>
    </>
  );
}
