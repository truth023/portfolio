/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import { FiFileText } from "react-icons/fi";
import Link from "next/link";
// import Image from "next/image";
import ultiverse from "../../public/projects/ultiverse.png";
import dynamic from "next/dynamic";

const Image = dynamic(() => import("next/image"), { ssr: false });

export default function Ultiverse() {
  return (
    <div className="px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
      <Head>
        <title>Benjamin lee</title>
        <link rel="icon" href="/favicon/favicon.png" />
      </Head>
      <main className="  max-w-screen ">
        <div className=" mx-auto pt-16 -pb-10 max-w-7xl">
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h1
              className={`mt-6 mb-12 font-deca bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold`}
            >
              Ultiverse
            </h1>
          </div>
          <div className=" mx-auto flex flex-col text-center justify-center">
            <h4
              className={`mb-12 font-deca bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-300 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-base md:text-lg lg:text-lg xl:text-lg font-bold`}
            >
              Three.js
            </h4>
          </div>
          <div className="flex justify-center space-x-3 md:space-x-6 lg:space-x-8 items-center  my-4">
            <div className="group border-purple-400 hover:bg-purple-400 hover:text-white hover:drop-shadow-2xl text-purple-500 rounded-md md:rounded-xl px-2 py-1 md:px-4 md:py-2 shadow-md drop-shadow-lg dark:bg-purple-400 dark:shadow-none dark:hover:shadow-white select-none dark:text-white shadow-purple-300 ">
              <Link
                href="https://city.ultiverse.io/"
                target="_blank"
                className="flex items-center font-normal lg:font-bold space-x-2 text-sm md:text-base"
              >
                <FiFileText className="dark:stroke-white stroke-purple-400 stroke-2 group-hover:stroke-white " />
                <p>Live</p>
              </Link>
            </div>
          </div>
          <div className=" mx-auto flex flex-col ">
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              A well-known open-source JavaScript package called three.js
              creates and displays 3D computer graphics in web browsers. The
              package uses WebGL, a low-level API for generating 3D images in
              real-time. It offers various tools and functions for designing and
              animating 3D objects, sceneries, and visual effects.
            </h4>
            <h4
              className={`mt-10 only:mb-12 font-deca bg-gradient-to-br bg-clip-text selection:text-gray-700 dark:selection:text-white/90 items-center mx-auto text-sm md:text-lg lg:text-lg xl:text-lg `}
            >
              I created a noteworthy feature that provides users with vibrant 3D
              scenes using three.js. This addition enhances the user experience
              by incorporating engaging and immersive three-dimensional visuals.
              It presented a valuable opportunity for me to delve into the realm
              of 3D graphics. This experience allowed me to explore and expand
              my skills in creating visually stunning three-dimensional content,
              contributing to my growth and expertise in the field.
            </h4>
          </div>
          <Image
            src={ultiverse}
            alt="ultiverse"
            width="max"
            priority
            className="drop-shadow-2xl mt-10 !visible"
          />
        </div>
      </main>
    </div>
  );
}
