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

import proj2 from "/public/images/projects/bg-notes-apps-dicoding.png";
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
        <title>Notes Apps</title>
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
            text="Notes Apps"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-4 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Proyek Akhir: Membangun Aplikasi Catatan Menggunakan React
              </h2>
              <h3 className="mb-4 text-lg font-bold text-lightGreen dark:text-primaryDark">
                Front-End Web | Type Script | React | TailwindCSS
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <ul className="text-justify list-disc pl-8 text-base marker:text-xl marker:text-blue-500 marker:leading-[1.2]">
                <li>
                  Berkenalan dengan React, mengetahui alasan mempelajari React,
                  dan mengenal ekosistem yang ada di React.
                </li>
                <li>
                  Belajar tentang konsep dasar React seperti composition,
                  declarative code, unidirectional data flow, dan menyadari
                  bahwa React hanyalah JavaScript
                </li>
                <li>
                  Belajar tentang membangun UI di React seperti mengenal element
                  dan component. Serta, belajar juga konsep component properti
                  yang membuat UI aplikasi bersifat reusable.
                </li>
                <li>
                  Belajar tentang class component, menggunakan state di dalam
                  component, mengubah nilai state berdasarkan event handling,
                  serta memahami dan mempraktikkan controlled component.
                </li>
              </ul>
              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                Kriteria Utama 1: Mampu Menampilkan Daftar Catatan
              </h4>
              <div className="my-4">
                <ul className="text-justify list-disc pl-8 text-base marker:text-xl marker:text-blue-500 marker:leading-[1.2]">
                  <li>
                    Aplikasi harus mampu menampilkan daftar catatan dengan data
                    awal (initial data) yang telah kami sediakan.
                  </li>
                  <li>
                    Memanfaatkan state component untuk menyimpan data catatan.
                  </li>
                  <li>
                    Menggunakan teknik array map untuk menampilkan daftar
                    catatan.
                  </li>
                </ul>
              </div>

              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                Kriteria Utama 2: Mampu Menambahkan Catatan
              </h4>
              <div className="my-4">
                <ul className="text-justify list-disc pl-8 text-base marker:text-xl marker:text-blue-500 marker:leading-[1.2]">
                  <li>Aplikasi harus mampu menambahkan data catatan baru.</li>
                  <li>
                    Memanfaatkan controlled component dalam membuat form input.
                  </li>
                  <li>
                    Data catatan disimpan cukup pada memori saja (akan hilang
                    jika browser di-refresh).
                  </li>
                  <li>
                    Data catatan yang disimpan merupakan objek JavaScript dengan
                    struktur berikut.
                    <CodeBlock1 />
                  </li>
                </ul>
              </div>

              <h4 className="mt-4 text-lg capitalize font-800 text-dark/75 dark:text-light/75">
                Kriteria Utama 3: Mampu Menghapus Catatan
              </h4>
              <div className="my-4">
                <ul className="text-justify list-disc pl-8 text-base marker:text-xl marker:text-blue-500 marker:leading-[1.2]">
                  <li>
                    Aplikasi harus menyediakan tombol{" "}
                    <span className="font-bold">hapus</span> untuk menghapus
                    data catatan yang disimpan.
                  </li>
                  <li>
                    Terdapat conditional rendering di mana bila tidak terdapat
                    data catatan, maka UI menampilkan pesan{" "}
                    <span className="font-bold">“Tidak ada catatan”</span> atau
                    pesan apa pun yang mengindikasikan data catatan kosong.
                  </li>
                </ul>
              </div>
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
                  href="https://notesapps-dicoding.netlify.app/"
                  target={"_blank"}
                >
                  Visit Demo
                </Link>
                <Link
                  href="https://github.com/bimamib/notes-app"
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
                src={proj2}
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
