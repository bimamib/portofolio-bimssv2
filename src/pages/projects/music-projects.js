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

import proj3 from "/public/images/projects/music-apps-project3.png";

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
        <title>Music Apps</title>
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
            text="Music Apps"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-4 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Music Apps
              </h2>
              <h3 className="mb-4 text-lg font-bold text-lightGreen dark:text-primaryDark">
                Front-End Web | VueJS | Tailwind | Firebase Auth & Database
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="text-justify">
                This project is a music-themed web-based application, where
                users can browse song collections, view song lists, as well as
                listen to songs with the inbuilt audio player.
              </p>
              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                About this Project Music Apps:
              </h4>
              <div className="my-4">
                <ol className="list-decimal pl-8 text-base marker:text-blue-500 marker:leading-[1.2]">
                  <li>
                    Frameworks and Key Technologies:
                    <ul className="pl-6 my-2 list-disc marker:text-blue-400">
                      <li className="my-2">
                        <b>Vue.js:</b>
                        <p className="text-justify">
                          Used as a frontend framework to build a dynamic and
                          interactive user interface (UI).
                        </p>
                      </li>
                      <li className="my-2">
                        <b>Tailwind CSS:</b>
                        <p className="text-justify">
                          Used to create interface components that are
                          responsive and modern, including navigation, layout,
                          and styling of elements on the page.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Authentication:
                    <ul className="pl-6 list-disc marker:text-blue-400">
                      <li className="my-2">
                        <b>Firebase Authentication:</b>
                        <p className="text-justify">
                          Used for user login and registration features. It
                          allows users to access the app with their account
                          securely.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Database:
                    <ul className="pl-6 list-disc marker:text-blue-400">
                      <li className="my-2">
                        <b>Firebase Database:</b>
                        <p className="text-justify">
                          Used to store song information, such as the name of
                          the artist, song title, and other related metadata.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Main Features:
                    <ul className="pl-6 list-disc marker:text-blue-400">
                      <li className="my-2">
                        <b>Elegant Interface:</b>
                        <p className="text-justify">
                          The page has an attractive design with a music-themed
                          background.
                        </p>
                      </li>
                      <li className="my-2">
                        <b>Simple Navigation:</b>
                        <p className="text-justify">
                          There is a navigation menu to move between pages such
                          as login/registration and the about page.
                        </p>
                      </li>
                      <li className="my-2">
                        <b>Music Player: </b>
                        <p className="text-justify">
                          Users can listen to songs with basic controls such as
                          play and pause.
                        </p>
                      </li>
                      <li className="my-2">
                        <b>Song List: </b>
                        <p className="text-justify">
                          Songs are displayed in a list with details such as
                          artist name and song title.
                        </p>
                      </li>
                      <li className="my-2">
                        <b>Comment: </b>
                        <p className="text-justify">
                          There is a feature to add comments or interaction on a
                          particular song.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>

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
                  href="https://music-gules-iota.vercel.app/"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>
                <Link
                  href="https://github.com/bimamib/Vue-Learn/tree/main/music"
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
            <div className="relative col-span-4 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1 ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="w-full h-auto rounded-2xl"
                src={proj3}
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
