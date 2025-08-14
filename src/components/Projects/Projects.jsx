import React, { useState } from 'react';
import { useMediaQuery } from "../../hooks/useMediaQuery";

const Projects = () => {
    const isMobile = useMediaQuery("(max-width: 768px)");
    const items = [
        {
            id: 1,
            image: 'https://unlimited-elements.com/wp-content/uploads/ac_assets/cover_flow_carousel/flowers1.jpeg',
            title: 'Yellow Flowers',
            text: 'The color yellow is primarily associated with spreading happiness and joy',
            link1: '#',
            link2: '#',
        },
        {
            id: 2,
            image: 'https://unlimited-elements.com/wp-content/uploads/ac_assets/cover_flow_carousel/flowers2.jpeg',
            title: 'White Flowers',
            text: 'Traditionally used in bridal bouquets or during memorial services',
            link1: '#',
            link2: '#',
        },
        {
            id: 3,
            image: 'https://unlimited-elements.com/wp-content/uploads/ac_assets/cover_flow_carousel/flowers3.jpeg',
            title: 'Pink Flowers',
            text: 'Similar to red flowers, pink flowers have also grown to be a symbol of love',
            link1: '#',
            link2: '#',
        },
        {
            id: 4,
            image: '/images/project_img/project4.png',
            title: 'Portfolio Site',
            text: 'A sleek, responsive portfolio made using HTML, CSS, JS with elegant design, smooth navigation, and optimized performance',
            link1: 'https://nikhil-partap.github.io/Website-Template/',
            link2: 'https://github.com/nikhil-partap/Website-Template',
        },
        {
            id: 5,
            image: '/images/project_img/project5.png',
            title: 'SkyWatch',
            text: 'A sleek, intuitive weather application that empowers users to plan their days with confidence ',
            link1: 'https://nikhil-partap.github.io/Skywatch/',
            link2: 'https://github.com/nikhil-partap/Skywatch',
        },
        {
            id: 6,
            image: 'https://unlimited-elements.com/wp-content/uploads/ac_assets/cover_flow_carousel/flowers6.jpeg',
            title: 'Pink Flowers',
            text: 'The color pink can be found in flowers such as roses, lilies, carnations and azaleas.',
            link1: '#',
            link2: '#',
        },
        {
            id: 7,
            image: 'https://unlimited-elements.com/wp-content/uploads/2021/08/flowers7-768x1152.jpeg',
            title: 'Blue Flowers',
            text: 'The soothing blue hues that many flowers possess are said to symbolize tranquility and peace',
            link1: '#',
            link2: '#',
        },
        {
            id: 8,
            image: 'https://unlimited-elements.com/wp-content/uploads/2021/08/flowers8-768x512.jpeg',
            title: 'Purple Flowers',
            text: 'Purple flowers are commonly said to symbolize success and even royalty',
            link1: '#',
            link2: '#',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(Math.floor(items.length / 2));

    const handlePrev = () => setCurrentIndex((prev) => (prev > 0 ? prev - 1 : items.length - 1));
    const handleNext = () => setCurrentIndex((prev) => (prev < items.length - 1 ? prev + 1 : 0));
    const handleSelect = (index) => setCurrentIndex(index);

    return (
        <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 flex flex-col items-center justify-center p-4 md:p-8">
            <h2 className="mb-5 text-5xl md:text-7xl font-bold text-cyan-400 mb-6 tracking-tight">My Works</h2>
            <p className="text-lg mb-19 text-gray-300 max-w-2xl mx-auto leading-relaxed">A showcase of my best code — clean, functional, and designed to impress.</p>

            {/* Carousel Container */}
            <div className="relative w-full max-w-5xl h-[400px] md:h-[500px] overflow-hidden" style={{ perspective: '1000px' }}>
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
                                pointerEvents: absOffset > 3 ? 'none' : 'auto',
                                transformStyle: 'preserve-3d',
                            }}
                            onClick={() => !isCenter && handleSelect(index)}
                        >
                            <div className="w-full h-full bg-black text-white rounded-lg shadow-lg overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-3/5 object-cover" />
                                <div className="p-4 text-center">
                                    <h3 className="text-xl font-semibold ">{item.title}</h3>
                                    <p className="text-sm  mt-2">{item.text}</p>
                                    <a
                                        href={item.link1}
                                        target='_blank'
                                        className={`mr-3 inline-block px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors shadow ${isMobile ? "mt-2" : "mt-7"} `}
                                    >
                                        Live link
                                    </a>
                                    <a
                                        href={item.link2}
                                        target='_blank'
                                        className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition-colors shadow"
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
                <button onClick={handlePrev} className="p-2 text-cyan-400 bg-black border-2 border-b-cyan-400 rounded-full hover:text-cyan-200">Prev</button>
                <button onClick={handleNext} className="p-2 text-cyan-400 bg-black border-2 border-b-cyan-400 rounded-full hover:text-cyan-200">Next</button>
            </div>
        </div>
    );
};

export default Projects;
