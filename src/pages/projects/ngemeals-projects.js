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

import proj5 from "/public/images/projects/ngemeals-project5.png";
import CodeBlock1 from "@/components/CodeBlock";

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
        <title>Ngemeals Apps</title>
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
            text="Ngemeals"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-4 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Ngemeals Apps
              </h2>
              <h3 className="mb-4 text-lg font-bold text-lightGreen dark:text-primaryDark">
                Front-End Web | Type Script | VueJS | TailwindCSS
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="my-4">
                This application connects with the API of TheMealDB to serve
                food data.
              </p>
              <ol className="pl-8 space-y-6 text-base font-semibold list-decimal marker:text-blue-500">
                <li className="pl-2">
                  <span>Meals Search</span>
                  <ul className="pl-6 mt-4 space-y-2 text-base font-normal text-justify list-disc marker:text-xl">
                    <li>Users can search meals by name.</li>
                    <li>Search meals by letter.</li>
                    <li>Search meals by ingredients.</li>
                  </ul>
                </li>
                <li className="pl-2">
                  <span>Search result display</span>
                  <ul className="pl-6 mt-4 space-y-2 text-base font-normal list-disc marker:text-xl">
                    <li className="text-justify">
                      Display a list of meals that match the search criteria,
                      including images and short descriptions.
                    </li>
                  </ul>
                </li>
                <li className="pl-2">
                  <span>Meals Detail</span>
                  <ul className="pl-6 mt-4 space-y-2 text-base font-normal list-disc marker:text-xl">
                    <li>Users can view the details of the selected meal</li>
                    <li>
                      Detailed information includes:
                      <ul className="pl-6 mt-2 list-disc">
                        <li>
                          <strong>Category</strong>:{" "}
                          <p className="text-justify">
                            Type of meal (e.g. dessert, seafood, etc).
                          </p>
                        </li>
                        <li>
                          <strong>Area</strong>:{" "}
                          <p className="text-justify]">
                            Regional origin of the meal.
                          </p>
                        </li>
                        <li>
                          <strong>Tags</strong>:{" "}
                          <p className="text-justify">
                            Food-relevant keywords.
                          </p>
                        </li>
                        <li>
                          <strong>Ingredients and Measurements</strong>:{" "}
                          <p className="text-justify">
                            List of ingredients required and their quantities.
                          </p>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="pl-2">
                  <span>Integration with YouTube</span>
                  <ul className="pl-6 mt-4 space-y-2 text-base font-normal text-justify list-disc marker:text-xl">
                    <li>
                      Meal details come with video links from YouTube for
                      cooking tutorials
                    </li>
                  </ul>
                </li>
              </ol>

              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                This project demonstrates capabilities in:
              </h4>
              <ul className="pl-6 mt-4 space-y-2 text-base font-normal text-justify list-disc marker:text-blue-500 marker:text-xl">
                <li>External API integration</li>
                <li>State management with VueJS.</li>
                <li>
                  Development of an attractive user interface for data search
                  and exploration.
                </li>
              </ul>
              {/* <p className="my-4 text-justify">
                Submission ini akan meminta Anda membuat aplikasi dengan tema
                aplikasi pencatatan buku. Ini kita namakan “Bookshelf App”.
                Aplikasi tersebut Anda butuhkan sebagai salah satu syarat untuk
                lulus dari kelas ini. Kami mengedepankan kreativitas Anda dalam
                membangun aplikasi, tetapi pastikan aplikasi yang dibuat
                memenuhi kriteria yang akan kami jelaskan.
              </p> */}

              <div className="flex items-center grid-cols-8 gap-4 mt-2 sm:gap-8">
                <Link
                  className="p-2 px-6 text-lg font-semibold capitalize border-2 border-solid rounded-lg bg-dark sm:px-4 sm:text-base text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://ngemeals.netlify.app/"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>
                <Link
                  href="https://github.com/bimamib/ngemeals"
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
                src={proj5}
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
