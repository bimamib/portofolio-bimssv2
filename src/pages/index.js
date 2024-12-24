import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import TransitionEffect from "@/components/TransitionEffect";
import profilePic from "../../public/images/profile/Bimsssss.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Bimss Portfolio</title>
        <meta
          name="description"
          content="Next Portfolio, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-24 md:!pt-16 sm:!pt-28">
          <div className="flex items-start justify-between w-full pt-10 pb-24 md:flex-col">
            <div className="flex self-center w-1/2 lg:hidden md:flex md:w-full md:justify-center max-h-fit">
              {
                <Image
                  priority={true}
                  src={profilePic}
                  alt="image"
                  className="h-auto w-100 md:w-2/3 sm:w-full"
                  height={340}
                  width={340}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              }
            </div>
            <div className="flex flex-col items-center self-center w-1/2 lg:w-full lg:text-center md:mt-8">
              <AnimatedText
                text="Oh, Hai I'm Bimss"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <div className="flex w-full items-center items-start lg:w-full lg:!justify-center sm:!justify-center md:!text-center md:inline-block">
                <h2 className="animate-text bg-gradient-to-r from-lightGreen via-lightGreen to-slideGreen bg-clip-text text-transparent font-semibold capitalize !text-5xl xl:!text-4xl lg:!text-4xl md:!text-4xl sm:!text-3xl">
                  I create Front-End Web and Mobile Dev.
                </h2>
              </div>

              <p className="my-4 text-base font-medium md:text-base sm:!text-sm md:text-center md:max-w-md">
                I have a bachelor's degree in informatics engineering, I am
                interested in front-end web and mobile developer. I'm also
                trying to hone my programming skills.
              </p>
              <div className="flex flex-wrap items-center self-start gap-3 mt-2 lg:self-center lg:justify-center md:w-full">
                <div className="flex flex-wrap gap-3 md:justify-center md:w-full">
                  <Link
                    href="/about/"
                    target={"_self"}
                    className={`flex items-center justify-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base md:flex-1 sm:w-full
                    `}
                  >
                    Get To Know Me
                  </Link>
                  <Link
                    href="/projects/"
                    target={"_self"}
                    className={`flex items-center justify-center rounded-lg border-2 border-solid bg-light p-2.5 px-6 text-lg font-semibold
                    capitalize text-dark hover:border-light hover:bg-dark hover:text-light 
                    dark:bg-dark dark:text-light dark:hover:bg-light dark:hover:text-dark
                    md:p-2 md:px-4 md:text-base md:flex-1 sm:w-full
                    `}
                  >
                    projects
                  </Link>
                </div>
                <Link
                  download=""
                  href="/pdf/CV-BimaPrasetio.pdf"
                  target={"_blank"}
                  className={`flex items-center justify-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base md:w-full sm:w-full
                    `}
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <div className="fixed inline-block right-8 bottom-8 md:hidden">
          <iframe
            className="rounded-xl iframe"
            title="Indonesia Calendar"
            width="280"
            height="120"
            src="https://seasonal-calendar.netlify.app/"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        <HireMe />
      </article>
    </>
  );
}
