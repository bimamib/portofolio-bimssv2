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

import proj7 from "/public/images/projects/ig-unfollowers-tracker-project7.png";

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
        <title>Instagram unfollowers Trackers</title>
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
            text="Instagram Unfollowers Trackers"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid grid-cols-8 gap-16 w-full sm:gap-8">
            <div className="flex flex-col col-span-4 justify-start items-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Instagram Unfollowers Trackers
              </h2>
              <h3 className="mb-4 text-lg font-bold text-lightGreen dark:text-primaryDark">
                Front-End Web | Instagram | Trackers
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="text-justify">
                Instagram Unfollowers Tracker is a web-based application that I
                developed to help Instagram users track who unfollowed their
                account. This project utilises official data provided by Meta
                (Instagram) in the form of JSON files, so users can get accurate
                results without having to use less secure third-party services.
              </p>
              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                Key Features:
              </h4>
              <div className="my-4">
                <ol className="list-decimal pl-8 text-base marker:text-blue-500 marker:leading-[1.2]">
                  <li>
                    JSON Data Upload: The user is prompted to upload two JSON
                    files:
                    <ul className="pl-6 my-2 list-disc marker:text-blue-400">
                      <li className="my-2">
                        <b>Followers JSON:</b>
                        <p className="text-justify">
                          Contains a list of accounts that follow the user.
                        </p>
                      </li>
                      <li className="my-2">
                        <b>Followings JSON:</b>
                        <p className="text-justify">
                          Contains a list of accounts followed by the user.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Data Analysis Process: Once the file is uploaded, the app
                    will process the data and compare the two lists to:
                    <ul className="pl-6 list-disc marker:text-blue-400">
                      <li className="my-2">
                        <p className="text-justify">
                          Displays who is not following the user's account back.
                        </p>
                      </li>
                      <li className="my-2">
                        <p className="text-justify">
                          Displays who has unfollowed the user's account.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Output in Table Form:
                    <ul className="pl-6 list-disc marker:text-blue-400">
                      <li className="my-2">
                        <p className="text-justify">
                          The results of the analyses are displayed in the form
                          of interactive tables that make it easy for users to
                          view, search, and filter the data.
                        </p>
                      </li>
                    </ul>
                  </li>
                  <li>
                    Instagram Data Request Guide:
                    <ul className="pl-6 list-disc marker:text-blue-400">
                      <li className="my-2">
                        <p className="text-justify">
                          There is a button to download the guide in PDF format,
                          containing the steps on how to request Instagram data
                          via Meta.
                        </p>
                      </li>
                    </ul>
                  </li>
                </ol>
              </div>

              <p className="my-4 text-justify">
                With this project, users can monitor their account interactions
                transparently and securely, without having to share credentials
                or personal data to other apps.
              </p>

              <div className="flex grid-cols-8 gap-4 items-center mt-2 sm:gap-8">
                <Link
                  className="p-2 px-6 text-lg font-semibold capitalize rounded-lg border-2 border-solid bg-dark sm:px-4 sm:text-base text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://instagram-unfollow-trackers.vercel.app/"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>
                <Link
                  href="https://github.com/bimamib/instagram-unfollow-trackers"
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
                src={proj7}
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
