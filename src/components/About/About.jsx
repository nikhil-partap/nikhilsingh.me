import React from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export default function About() {
    const isMobile = useMediaQuery("(max-width: 768px)");
    return (
        <div className="py-16 bg-black bg-center bg-cover h-auto " style={{
            backgroundImage:
                "url('/images/bg-About.png')",
        }} >
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="/images/about_img2.png"
                            alt="Nikhil Singh avatar"
                            className={`mx-auto mb-8 object-cover rounded-full border-4 border-cyan-400 shadow-cyan-800 shadow-lg ${isMobile ? "w-52 h-52" : "w-[482px] h-[482px]"
                                }`}
                        />

                    </div>2
                    <div className="md:7/12 lg:w-6/12">
                        <section className={` max-w-3xl mx-auto text-center py-10 px-4 bg-black/60 rounded-3xl backdrop-blur-md shadow-xl ${isMobile ? 'text-base' : 'text-lg'}`}>
                            <h2 className="text-cyan-400 text-2xl font-extrabold mb-6 border-b-4 border-cyan-400 inline-block px-4">About Me</h2>
                            <p className="text-gray-50 leading-relaxed">
                                I’m <strong>Nikhil Singh</strong>, an 18-year-old B.Tech Computer Science student at Chitkara University, currently advancing through Harvard’s renowned CS50 course. With a passion for <strong>full-stack web development</strong>, I specialize in building scalable and efficient web applications using React, Node.js, and a variety of modern web technologies.
                                <br /><br />
                                I enjoy tackling real-world problems by designing practical, user-friendly solutions that deliver tangible impact. Continuously learning and improving, I focus on strengthening my understanding of data structures, algorithms, and systems programming to grow as a well-rounded software developer.
                                <br /><br />
                                Beyond coding, I am enthusiastic about contributing to the tech community and collaborating on meaningful projects that challenge and expand my skillset. My commitment to learning and adaptability helps me stay current with industry trends and best practices.
                                <br /><br />
                                I’m excited to share my journey, projects, and knowledge with others and aim to build a portfolio that reflects both my technical abilities and my dedication to quality software craftsmanship.
                            </p>
                        </section>
                        <div className="flex justify-center gap-6 mt-4 mb-6">
                            <img src="/src/assets/react.svg" alt="React" className="h-8 w-8" />
                            <img src="/path/nodejs.svg" alt="Node.js" className="h-8 w-8" />
                            <img src="/path/c.svg" alt="C" className="h-8 w-8" />
                            {/* Add more... */}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}