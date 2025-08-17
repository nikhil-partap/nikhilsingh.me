import React from "react";
import { Link } from "react-router-dom";


export default function Home() {
    return (
        <div className="bg-black min-h-screen text-white">
            {/* HERO */}
            <section className="flex flex-col items-center justify-center h-[70vh] text-center relative">
                <video
                    className="absolute inset-0 w-full h-full object-cover opacity-59 pointer-events-none"
                    autoPlay muted loop playsInline
                >
                    <source src="/videos/cube.mp4" type="video/mp4" />
                </video>
                <div className="relative z-10 max-w-2xl">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-2">
                        Hi, I'm Nikhil Singh
                    </h1>
                    <p className="text-lg text-gray-300 mb-6 font-medium">
                        Full-stack Web Developer | CS50x Certified | Building high-impact web products.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/projects" className="px-5 py-2 rounded-lg text-cyan-400 border border-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold">View Projects</Link>
                        <Link to="/contact" className="px-5 py-2 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition">Contact Me</Link>
                    </div>
                </div>
            </section>

            {/* SOCIAL PROOF */}
            <section className="mt-8 mb-4 text-center">
                <p className="text-sm text-gray-400">Built 10+ projects · CS50 graduate · Open for freelance & internships</p>
            </section>

            {/* PROJECTS GRID */}
            <section className="mt-8 max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-cyan-400 text-center">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Repeat these for real projects */}
                    <div className="bg-gray-900/70 rounded-lg p-6">
                        <img src="project1.jpg" alt="Project" className="mb-3 rounded" />
                        <h3 className="font-bold text-lg mb-2">Professional Weather App</h3>
                        <p className="text-gray-300 mb-2">Real-time weather forecasts with temperature, humidity, and location-aware updates, built with React and modern APIs.</p>
                        <a href="https://github.com/nikhil-partap/Skywatch" target="_blank" className="text-cyan-400 pr-7 hover:underline">View on GitHub</a>
                        <a href="https://nikhil-partap.github.io/Skywatch/" target="_blank" className="text-cyan-400 hover:underline">Live Demo</a>
                    </div>
                    <div className="bg-gray-900/70 rounded-lg p-6">
                        <img src="project1.jpg" alt="Project" className="mb-3 rounded" />
                        <h3 className="font-bold text-lg mb-2">CS50 Speller - Hash Table Spell Checker</h3>
                        <p className="text-gray-300 mb-2">A high-performance command-line spell checker implementing a custom hash table data structure in C.</p>
                        <a href="https://github.com/nikhil-partap/CS50--log/tree/main/week5_problems/speller" target="_blank" className="text-cyan-400 pr-7 hover:underline">View on GitHub</a>
                        {/* <a href="https://nikhil-partap.github.io/Skywatch/" target="_blank" className="text-cyan-400 hover:underline">Live Demo</a> */}
                    </div>
                </div>
            </section>

            {/* BRIEF ABOUT */}
            <section className="py-10 max-w-3xl mx-auto text-center">
                <h2 className="text-xl font-semibold mb-2 text-cyan-400">About Me</h2>
                <p className="text-gray-300">
                    CS undergrad, deep into DSA and full-stack dev.obsessed with results. Let's ship something meaningful—fast.
                </p>
            </section>
        </div>

    );
}
