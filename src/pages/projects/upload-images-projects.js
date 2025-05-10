import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";

import proj6 from "/public/images/projects/upload-images-project6.png";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://travislord.xyz/projects/clay-gatsby-theme"
        ></link>
        <title>Upload Images</title>
        <meta
          name="description"
          content="I am thrilled to share Clay Theme with the web development community! I have recently launched Clay Theme, a cutting-edge Gatsby Framework Template."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex flex-col justify-center items-center w-full dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Upload Images"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-8 gap-16 w-full sm:gap-8">
            <div className="flex flex-col col-span-4 justify-start items-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Upload Images
              </h2>
              <h3 className="mb-4 text-lg font-bold text-lightGreen dark:text-primaryDark">
                Front-End Web | Next.js | Tailwind | Prisma | PostgreSQL
              </h3>
              {/* <div classNname="w-full border-2 border-solid border-light bg-light"></div> */}
              <p className="text-justify">
                This project is a web-based application to upload, update, and
                delete images. This application was built with the aim of being
                a learning medium in web development using{" "}
                <strong>Next.js.</strong>
              </p>
              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                Technologies Used:
              </h4>
              <div className="my-4">
                <ul className="pl-5 space-y-2 list-disc text-justify marker:text-blue-500">
                  <li>
                    <strong>Next.js</strong> – React framework for building
                    modern and high-performance web applications.
                  </li>
                  <li>
                    <strong>PostgreSQL</strong> – A relational database used to
                    store image metadata.
                  </li>
                  <li>
                    <strong>Prisma Client</strong> – ORM (Object-Relational
                    Mapping) which simplifies database management with simpler
                    queries.
                  </li>
                  <li>
                    <strong>Tailwind CSS</strong> – A CSS framework used to
                    design interfaces with a minimalist and responsive style.
                  </li>
                </ul>

                <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                  Main Features:
                </h4>
                <ul className="pl-5 mt-4 space-y-2 list-disc text-justify marker:text-blue-500">
                  <li>
                    <strong>Image Upload</strong> – Users can upload new images
                    to the system.
                  </li>
                  <li>
                    <strong>Image Update</strong> – Images that have been
                    uploaded can be updated.
                  </li>
                  <li>
                    <strong>Delete Image</strong> – Users can delete images that
                    are not needed.
                  </li>
                  <li>
                    <strong>Simple and Modern UI</strong> – The design uses
                    Tailwind CSS which makes the display more responsive and
                    attractive.
                  </li>
                </ul>
              </div>

              <p className="my-4 text-justify">
                This project aims to understand the implementation of Next.js
                with PostgreSQL-based backend using Prisma Client and how to
                manage image data dynamically with a user-friendly UI.
              </p>

              <div className="flex grid-cols-8 gap-4 items-center mt-2 sm:gap-8">
                <Link
                  className="p-2 px-6 text-lg font-semibold capitalize rounded-lg border-2 border-solid bg-dark sm:px-4 sm:text-base text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://upload-images-alpha.vercel.app/"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>
                <Link
                  href="https://github.com/bimamib/nextjs-upload"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
                {/* <Link
                  href="https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <DevIcon />
                </Link> */}
              </div>
            </div>
            <div className="relative col-span-4 p-8 rounded-2xl border-2 border-solid h-max border-dark bg-light dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="w-full h-auto rounded-2xl"
                src={proj6}
                alt="Book"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
}
