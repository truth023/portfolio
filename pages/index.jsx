import { useRef } from "react";
import Blob from "@/components/Blob";
import Image from "next/image";
import smurf_img from "../public/home/smurf.png";
import Experience from "@/components/Experience";
import Head from "next/head";
import Typed from "typed.js";
import { useEffect } from "react";
import dynamic from "next/dynamic";

const Contact = dynamic(() => import("@/components/Contact"), { ssr: false });

export default function Home() {
  const typedTextRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Coder", "Tech Blogger", "Tech Enthusiast"],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Benjamin lee</title>
        <link rel="icon" href="/favicon/favicon.png" />
      </Head>
      <div className="lg:min-h-screen px-10 sm:px-20 md:px-32 lg:mb-12 lg:px-60 mx-auto max-w-[75rem]">
        <div className="2xl:h-max max-w-[90rem] mx-auto">
          <Blob />
          <div className="flex flex-row justify-start items-center mt-20">
            <div className="flex rounded-full">
              <Image
                src={smurf_img}
                alt="benjamin"
                width="100"
                height="100"
                className="rounded-full border-2 border-slate-500"
              />
            </div>
            <div className="flex flex-col ml-4">
              <h2 className="font-bold text-red-500 sm:text-2xl md:text-2xl lg:text-4xl">
                Benjamin Lee
              </h2>
              <h4 className="text-blue-400 xl:font-bold sm:font-bold md:font-bold sm:text-xl md:text-xl lg:text-2xl">
                <span className="typed-text" ref={typedTextRef}></span>
              </h4>
            </div>
          </div>
          <div className="mt-12 m:text-xl md:text-xl lg:text-2xl">
            <p className="font-light sm:leading-6 md:leading-6 lg:leading-8">
              Senior full-stack engineer with 7+ years of hands-on experience in
              web development who specializes in JavaScript Frameworks and
              Libraries such as React and Next for front end and Node.js for
              back end. Well known as passionate and motivate in working for
              completing project within deadline and expected cleaned and
              testing code with comment.
            </p>
          </div>
        </div>
        <div className="mt-28 mx-auto">
          <Experience />
        </div>
        <div className="mt-28 mx-auto ">
          <Contact />
        </div>
      </div>
    </>
  );
}
