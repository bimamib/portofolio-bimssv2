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

import proj1 from "/public/images/projects/bg-bookshelf-apps-dicoding.png";

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
        <title>Bookshelf Apps Dicoding</title>
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
            text="Bookshelf Apps"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-4 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Bookshelf Apps Dicoding
              </h2>
              <h3 className="mb-4 text-lg font-bold text-lightGreen dark:text-primaryDark">
                Front-End Web | Back-End
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <ul className="text-justify list-disc pl-8 text-base marker:text-xl marker:text-blue-500 marker:leading-[1.2]">
                <li>
                  Browser Object Model (BOM) dan Document Object Model (DOM)
                  untuk memanipulasi konten atau styling halaman web.
                </li>
                <li>
                  Bermain dengan event pada elemen HTML untuk memberikan suatu
                  instruksi. Selain itu, Anda mampu mengubah konten website
                  melalui teknik manipulasi DOM pada saat event terjadi.
                </li>
                <li>
                  Dua jenis penyimpanan yang dapat mempertahankan data Anda di
                  aplikasi web, yaitu localStorage dan sessionStorage.
                </li>
                <li>
                  Terakhir, Anda sudah mampu membuat website untuk mengelola
                  daftar To-Do dengan baik menggunakan teknik manipulasi DOM,
                  Event, dan Web Storage.
                </li>
              </ul>
              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                Submission: Membangun Bookshelf App
              </h4>
              <p className="my-4 text-justify">
                Submission ini akan meminta Anda membuat aplikasi dengan tema
                aplikasi pencatatan buku. Ini kita namakan “Bookshelf App”.
                Aplikasi tersebut Anda butuhkan sebagai salah satu syarat untuk
                lulus dari kelas ini. Kami mengedepankan kreativitas Anda dalam
                membangun aplikasi, tetapi pastikan aplikasi yang dibuat
                memenuhi kriteria yang akan kami jelaskan.
              </p>

              <div className="flex items-center grid-cols-8 gap-4 mt-2 sm:gap-8">
                <Link
                  className="p-2 px-6 text-lg font-semibold capitalize border-2 border-solid rounded-lg bg-dark sm:px-4 sm:text-base text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://book-shelf-apps.vercel.app/"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>
                <Link
                  href="https://github.com/bimamib/Book-Shelf_Apps"
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
                src={proj1}
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
