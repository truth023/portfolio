import Head from "next/head";
import { useTheme } from "next-themes";
import CategoryCard from "@/components/CategoryCard";
import love_black from "../public/love-black.svg";
import love_white from "../public/love-white.svg";
import smurf from "../public/home/smurf.png";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), { ssr: false });

export default function About() {
  const { systemTheme, theme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Benjamin lee</title>
        <link rel="icon" href="/favicon/favicon.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col ">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-br to-blue-500 via-red-400/90 from-yellow-500  bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              About Me
            </h1>
            <div className="text-center mx-auto z-20">
              <h2 className="mx-auto font-bold text-lg lg:text-xl xl:text-2xl">
                Benjamin Lee{" "}
                <span className="inline-flex items-baseline">
                  <Image
                    src={smurf}
                    alt="smurf"
                    width="auto"
                    className="self-center w-10 h-10 mx-1"
                  />
                </span>{" "}
              </h2>
            </div>
          </div>
          <CategoryCard />
          <div className=" text-[0.92rem] md:text-base md:text-md lg:text-lg xl:text-xl mx-auto font-light dark:text-white text-gray-900 ">
            <p className="mt-6 mb-12 leading-10 font-normal">
              I am a Senior Front-end Engineer crafting modern, responsive, and
              user-friendly web applications with cutting-edge technologies. I
              believe in achieving a perfect fusion of UI architecture that
              elegantly, efficiently, and robustly addresses goals and needs.
              Proficient in ReactJS, React Native, NextJS, and state management
              like Redux, with expertise in web technologies such as HTML5,
              CSS3, and JavaScript. Experienced in developing large-scale web
              applications, ensuring compatibility across various browsers and
              addressing design constraints on the web while creating responsive
              user interfaces.{" "}
            </p>

            <p className="text-gray-400 select-none font-semibold mb-1 dark:text-white/30 ">
              Contact
            </p>

            <p className="">
              Though I may not be widely recognized, I am easily accessible for
              connection on my social media platforms.
              <span className="text-red-700 font-bold">GMail</span>{" "}
              <a
                onClick={() =>
                  navigator.clipboard.writeText("benjaminlee@gmail.com")
                }
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 group select-all font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select "
                href="mailto:benjaminlee@gmail.com"
              >
                {" "}
                benjaminlee@gmail.com
              </a>{" "}
              or <span className="text-blue-700 font-bold">LinkedIn</span>{" "}
              <a
                href="http://linkedin.com/in/"
                className=" underline underline-offset-4 decoration-2 decoration-purple-400 font-semibold dark:hover:text-purple-400 hover:text-purple-700 cursor-pointer select"
                rel="noopener noreferrer"
                target="blank"
              >
                {" "}
                Benjamin Lee{" "}
              </a>{" "}
            </p>
          </div>
          <div className="flex mx-auto justify-center mt-16 select-none">
            <span className="font-black font-app text-2xl md:text-3xl align-text-bottom tracking-wider mx-3 md:mx-6">
              Benjamin Lee
            </span>
            {currentTheme === "dark" ? (
              <Image src={love_white} alt="love" width="30" className="mt-4" />
            ) : (
              <Image src={love_black} alt="love" width="30" className="mt-4" />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
