import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profile from "../../public/images/profile/Bimsssss.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { HireMe2 } from "@/components/HireMe2";

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
    [springValue, value],
  );

  return <span ref={ref} />;
}

export default function About() {
  // Days of coding fetched from GitHub API
  const [daysCoding, setDaysCoding] = useState(350); // fallback tetap 350 biar aman

  useEffect(() => {
    const run = async () => {
      try {
        const res = await fetch("/api/github-days?days=365");
        const json = await res.json();
        if (typeof json.daysWithContributions === "number") {
          setDaysCoding(json.daysWithContributions);
        }
      } catch {}
    };
    run();
  }, []);

  return (
    <>
      <Head>
        <title>About Me</title>
        <meta
          name="description"
          content="NexTemp, A open-source portfolio theme built with Nextjs"
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Curious about how to make a game: My Coding Journey Started Here! 🔥"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="flex flex-col items-start justify-start col-span-3 xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium text-justify">
                Hello, I'm Bima Prasetio, you can call me Bimss or Bima. I am a
                graduate of Informatics Engineering from Universitas
                Muhammadiyah Prof Dr Hamka, where I thought I would learn a lot
                about coding, but it turns out that only a little material is
                taught about coding🤣. Currently, I handle Front-End Web and
                Mobile Development. Why not Full-Stack? Because my logic is very
                minimal related to Full-Stack, then instead of Full-Stack, I'll
                be Full-Stuck, HAHAHA 😆. Even in Front-End, I'm already ‘waduh
                waduh’ because of bugs, what will Full-Stack be? 😂. But calm
                down in the future, I will definitely learn more about
                Full-Stack.
              </p>
              <p className="my-4 font-medium text-justify">
                When I was in college, I was active enough to join the Web
                Programming Community and committee activities at my university.
                In the community, I worked in the marketing division. Not bad to
                add to my editing skills 😎, even though I only edit posters to
                post on Instagram and share with WhatsApp groups 😝.
              </p>
              <p className="my-4 font-medium text-justify">
                Oh yes, one more thing, Alhamdulillah, I also completed the
                Kampus Merdeka X Dicoding Academy Cycle 4 program, and Bangkit
                Academy 2023 Batch 2 (thanks to Google, GoTo, and Traveloka)
                where because of these programs I was able to learn and explore
                related to Front-End Web and Back-End, as well as Android
                Development in the Bangkit program. So because of these 2
                Merdeka Campus programmes, I can make coffee to stay up late
                ☕💻.
              </p>
              <p className="my-4 font-medium text-justify">
                P.s I sometimes like to watch anime and like to play games ✌🏼.
              </p>
            </div>
            <div className="relative col-span-3 p-8 border-2 border-solid h-max rounded-2xl border-dark bg-light dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1 ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="w-full h-auto border-2 border-solid rounded-2xl border-dark"
                priority={true}
                src={profile}
                alt="Bimss"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
              />
            </div>
            <div className="flex flex-col items-end justify-between col-span-2 xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={daysCoding} />+
                </span>
                <h3 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Days of Coding
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={100} />
                </span>
                <h3 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Bugs Made
                </h3>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block font-bold text-7xl md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={99} />
                </span>
                <h3 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Bugs Crushed
                </h3>
              </div>
            </div>
            <HireMe2 />
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </>
  );
}
