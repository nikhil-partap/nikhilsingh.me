import React, {useState} from "react";
import {useMediaQuery} from "../../hooks/useMediaQuery";

const Projects = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const items = [
    // {
    //     id: 1,
    //     image: 'https://unlimited-elements.com/wp-content/uploads/ac_assets/cover_flow_carousel/flowers1.jpeg',
    //     title: 'Yellow ',
    //     text: 'The color yellow is primarily associated with spreading happiness and joy',
    //     link1: '#',
    //     link2: '#',
    // },
    {
      id: 2,
      image: "/images/project_img/project2.png",
      title: "Runoff",
      text: "Implements a ranked-choice voting algorithm, showcasing complex logic for real-world election systems.",
      // link1: '#',
      link2: "https://github.com/nikhil-partap/CS50/tree/main/runoff",
    },
    {
      id: 3,
      image: "/images/project_img/project3.png",
      title: "Currency Converter",
      text: "A responsive web app that quickly converts currencies using real‑time exchange rates.",
      link1: "https://currency-converter-pi-eight-50.vercel.app/",
      link2: "https://github.com/nikhil-partap/Currency_Converter",
    },
    {
      id: 4,
      image: "/images/project_img/project4.png",
      title: "Portfolio Site",
      text: "A sleek, responsive portfolio made using HTML, CSS, JS with elegant design, smooth navigation, and optimized performance",
      link1: "https://nikhil-partap.github.io/Website-Template/",
      link2: "https://github.com/nikhil-partap/Website-Template",
    },
    {
      id: 5,
      image: "/images/project_img/project5.png",
      title: "SkyWatch",
      text: "A sleek, intuitive weather application that empowers users to plan their days with confidence ",
      link1: "https://nikhil-partap.github.io/Skywatch/",
      link2: "https://github.com/nikhil-partap/Skywatch",
    },
    {
      id: 6,
      image: "/images/project_img/project6.png",
      title: "Personal Portfolio Website",
      text: "A sleek, modern portfolio site highlighting my journey as a B.Tech CS student and aspiring full-stack developer.",
      link1: "https://www.nikhilsingh.me/",
      link2: "https://github.com/nikhil-partap/nikhilsingh.me",
    },
    {
      id: 1,
      image: "/images/project_img/project1.png",
      title: "To-Do List application ",
      text: "a minimalist, dark-themed to-do app for adding, completing, and deleting tasks. It uses local storage to save the list,",
      link1: "https://todo-localstorage-muh5.vercel.app/",
      link2: "https://github.com/nikhil-partap/todoLocalstorage",
    },
    {
      id: 7,
      image: "/images/project_img/project7.png",
      title: "Hash Table Spell Checker",
      text: "A high-performance command-line spell checker implementing a custom hash table data structure in C.",
      // link1: '#',
      link2:
        "https://github.com/nikhil-partap/CS50--log/tree/main/week5_problems/speller",
    },
    {
      id: 8,
      image: "/images/project_img/project8.png",
      title: "Recover",
      text: "Demonstrates low-level C skills by recovering JPEG files from raw memory data, highlighting file I/O and pointer mastery.",
      // link1: '#',
      link2: "https://github.com/nikhil-partap/CS50/tree/main/recover",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(
    Math.floor(items.length / 2)
  );

  const handlePrev = () =>
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
  const handleNext = () =>
    setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
  const handleSelect = (index) => setCurrentIndex(index);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 flex flex-col items-center justify-center p-4 md:p-8">
      <h2 className="mb-5 text-5xl md:text-7xl font-bold text-cyan-400 mb-6 tracking-tight">
        My Works
      </h2>
      <p className="text-lg mb-19 text-gray-300 max-w-2xl mx-auto leading-relaxed">
        A showcase of my best code — clean, functional, and designed to impress.
      </p>

      {/* Carousel Container */}
      <div
        className="relative w-full max-w-7xl h-[450px] md:h-[500px] overflow-hidden"
        style={{perspective: "1000px"}}
      >
        {items.map((item, index) => {
          const offset = index - currentIndex;
          const absOffset = Math.abs(offset);
          const isCenter = offset === 0;

          return (
            <div
              key={item.id}
              className={`absolute top-0 left-1/2 w-64 md:w-80 h-full transition-all duration-500 ease-in-out`}
              style={{
                transform: `
                  translateX(${offset * 50}%)
                  translateX(-50%)
                  scale(${1 - absOffset * 0.1})
                  rotateY(${offset > 0 ? -30 : offset < 0 ? 30 : 0}deg)
                `,
                zIndex: 20 - absOffset,
                opacity: absOffset > 3 ? 0 : 1,
                pointerEvents: absOffset > 3 ? "none" : "auto",
                transformStyle: "preserve-3d",
              }}
              onClick={() => !isCenter && handleSelect(index)}
            >
              <div className="w-full h-full bg-black text-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-full object-cover ${
                    isMobile ? "h-[45%]" : "h-[60%]"
                  } `}
                />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold ">{item.title}</h3>
                  <p className="text-sm  mt-2">{item.text}</p>
                  {item.link1 && ( // Only render if link1 exists and is truthy
                    <a
                      href={item.link1}
                      target="_blank"
                      className={`mr-3 inline-block px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors shadow ${
                        isMobile ? "mt-2" : "mt-7"
                      } `}
                    >
                      Live link
                    </a>
                  )}
                  <a
                    href={item.link2}
                    target="_blank"
                    className={`inline-block px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition-colors shadow ${
                      isMobile ? "mt-2" : "mt-7"
                    } `}
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation */}
      <div className="flex justify-between w-full max-w-md mt-8">
        <button
          onClick={handlePrev}
          className="p-2 text-cyan-400 bg-black border-2 border-b-cyan-400 rounded-full hover:text-cyan-200"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          className="p-2 text-cyan-400 bg-black border-2 border-b-cyan-400 rounded-full hover:text-cyan-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Projects;
