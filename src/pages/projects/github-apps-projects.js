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

import proj4 from "/public/images/projects/github-user-project4.png";

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
        <title>Github Apps</title>
        <meta
          name="description"
          content="I am thrilled to share Clay Theme with the web development community! I have recently launched Clay Theme, a cutting-edge Gatsby Framework Template."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Github User Apps"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-4 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Github Apps
              </h2>
              <h3 className="mb-4 text-lg font-bold text-lightGreen dark:text-primaryDark">
                Mobile Development | Kotlin
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <ol className="text-justify list-decimal space-y-2 pl-8 text-base marker:text-blue-500 marker:leading-[1.2]">
                <li>
                  This app will be displayed a list of Github users from Github
                  REST API
                </li>
                <li>
                  If an app user clicks on one of the Github users from the
                  list, the details of the Github user that was clicked will be
                  displayed
                </li>
                <li>
                  User can search the username of any github user you want, and
                  then data will be displayed in screen
                </li>
                <li>
                  If an app user clicks on any of the Github users from the list
                  of username previously searched for, the details of the
                  clicked Github users will be displayed
                </li>
              </ol>

              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                Submission Checklist:
              </h4>
              <ul className="my-4 text-justify list-disc pl-8 space-y-2 text-base marker:text-xl marker:text-blue-500 marker:leading-[1.2]">
                <li>Retain the features of Submission 1.</li>
                <li>User search using data from the API runs well.</li>
                <li>
                  Using Tab Layout, Bottom Navigation View, or others as
                  navigation between List Follower and List Following pages.
                </li>
                <li>
                  There is a loading indicator when the app loads data on all
                  pages.
                </li>
              </ul>

              {/* <p className="my-4 text-justify">
                This submission will ask you to create an app with the theme of
                a bookshelf app. This is called “Bookshelf App”. You need the
                app as one of the requirements to graduate from this class. We
                emphasize your creativity in build the app, but make sure it
                meets the meet the criteria that we will explain.
              </p> */}

              <div className="flex items-center grid-cols-8 gap-4 mt-2 sm:gap-8">
                <Link
                  className="p-2 px-6 text-lg font-semibold capitalize border-2 border-solid rounded-lg bg-dark sm:px-4 sm:text-base text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://github.com/bimamib/Submission-Fundamental_Aplikasi-Android"
                  target={"_blank"}
                >
                  Visit Repo
                </Link>
                {/* <Link
                  href="https://github.com/bimamib/Book-Shelf_Apps"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link> */}
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
            <div className="relative col-span-4 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1 ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="w-full h-auto rounded-2xl"
                src={proj4}
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
