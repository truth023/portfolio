import Link from "next/link";
import Image from "next/image";
// projects images
import ultiverse from "../public/projects/ultiverse.png";
import timewell from "../public/projects/timewell.png";
import theoptimizer from "../public/projects/theoptimizer.png";
import tapfood from "../public/projects/tapfood.png";
import minesofdalarnia from "../public/projects/minesofdalarnia.png";
import thefreshmarket from "../public/projects/thefreshmarket.png";
import range from "../public/projects/range.png";
import scarletboom from "../public/projects/scarletboom.png";
import ferradawheels from "../public/projects/ferradawheels.png";

// import pokedex from "../public/pokedex.jpg";
// import portfolio from "../public/portfolio.jpg";
// import cryptohunter from "../public/crypto-hunter.jpg";
// import redeye from "../public/red-eye.jpg";
// import evo from "../public/evo.jpg";
// import nft from "../public/nft.jpg";
// import nike from "../public/nike.jpg";

const ProjectCard = () => {
  const data = [
    {
      id: 1,
      image: ultiverse,
      title: "Ultiverse",
      description: "3D animate three.js",
      link: "/projects/ultiverse",
      target: "_self",
    },
    {
      id: 2,
      image: timewell,
      title: "timewell",
      description: "Laravel + Vuejs",
      link: "/projects/timewell",
      target: "_self",
    },
    {
      id: 3,
      image: theoptimizer,
      title: "theoptimizer",
      description: "AngularJs",
      link: "/projects/theoptimizer",
      target: "_self",
    },
    {
      id: 4,
      image: tapfood,
      title: "tapfood",
      description: "Full stack",
      link: "https://www.tapfood.us",
      target: "_blank",
    },
    {
      id: 5,
      image: minesofdalarnia,
      title: "minesofdalarnia",
      description: "Unity + C#",
      link: "https://www.minesofdalarnia.com/",
      target: "_blank",
    },
    {
      id: 6,
      image: thefreshmarket,
      title: "thefreshmarket",
      description: "Full stack NGINX",
      link: "https://www.thefreshmarket.com",
      target: "_blank",
    },
    {
      id: 7,
      image: ferradawheels,
      title: "ferradawheels",
      description: "HTML & CSS & Javascript & AJAX",
      link: "https://dealers.ferradawheels.com",
      target: "_blank",
    },
    {
      id: 8,
      image: range,
      title: "range",
      description: "Get the Trending Crypto list with its Price",
      link: "/projects/range",
      target: "_self",
    },
    {
      id: 9,
      image: scarletboom,
      title: "scarletboom",
      description: "AWS",
      link: "/projects/scarletboom",
      target: "_self",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
      {data.map((project) => {
        return (
          <div
            className="rounded-lg mb-12 flex flex-col items-center"
            key={project.id}
          >
            <Link
              href={project.link}
              target={project.target}
              onClick={() => {
                project.title === "Portfolio"
                  ? alert("You are already on this site! 🤩")
                  : "";
              }}
            >
              <Image
                loading="lazy"
                src={project.image}
                alt={project.title}
                width="200"
                className="rounded-md drop-shadow-2xl hover:scale-110"
              />
            </Link>
            <div className="flex flex-col items-center">
              <h1 className="font-semibold text-[1.5rem] mt-3 text-gray-700 dark:text-white">
                {project.title}
              </h1>
              <p className="max-w-[90%] text-gray-400 font-light text-center">
                {project.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
