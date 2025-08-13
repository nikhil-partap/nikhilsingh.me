import React, { useState, useRef } from 'react';

export default function Projects() {
    const projects = [
        {
            id: 1,
            title: "E-commerce Dashboard",
            description: "Full-stack dashboard with real-time analytics and inventory management.",
            image: "/projects/ecommerce-dashboard.jpg",
            techStack: ["React", "Node.js", "MongoDB", "Tailwind"],
            liveUrl: "https://your-project.vercel.app",
            githubUrl: "https://github.com/nikhil-partap/ecommerce-dashboard",
            status: "Live"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "Collaborative task tracker with team management and progress visualization.",
            image: "/projects/task-manager.jpg",
            techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
            liveUrl: "https://task-manager-demo.vercel.app",
            githubUrl: "https://github.com/nikhil-partap/task-manager",
            status: "In Progress"
        },
        {
            id: 3,
            title: "Portfolio Website",
            description: "Personal developer portfolio with blog and project showcase.",
            image: "/projects/portfolio.jpg",
            techStack: ["React", "Tailwind", "Framer Motion"],
            liveUrl: "https://nikhilsingh.me",
            githubUrl: "https://github.com/nikhil-partap/portfolio",
            status: "Live"
        },
        {
            id: 4,
            title: "Queue Implementation",
            description: "Professional queue system with priority handling and performance optimization.",
            image: "/projects/queue-system.jpg",
            techStack: ["C", "Data Structures", "Algorithms"],
            liveUrl: null,
            githubUrl: "https://github.com/nikhil-partap/queue-implementation",
            status: "Completed"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef(0);

    const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
    const nextIndex = (currentIndex + 1) % projects.length;

    function handlePrev() {
        setCurrentIndex(prev => (prev - 1 + projects.length) % projects.length);
    }

    function handleNext() {
        setCurrentIndex(prev => (prev + 1) % projects.length);
    }

    function handleTouchStart(e) {
        touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e) {
        const dx = e.changedTouches[0].clientX - touchStartX.current;
        if (dx > 40) handlePrev();
        else if (dx < -40) handleNext();
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20 select-none">
            {/* Header */}
            <div className="text-center mb-12 px-4">
                <h1 className="text-5xl md:text-7xl font-bold text-cyan-400 mb-6 tracking-tight">
                    My Works
                </h1>
                <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
                    A showcase of my best code — clean, functional, and designed to impress.
                </p>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between items-center mb-6 max-w-2xl mx-auto px-4">
                <button
                    onClick={handlePrev}
                    className="group flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/50 hover:border-cyan-400 bg-black shadow transition-all duration-300 hover:scale-105"
                    aria-label="Previous project"
                >
                    <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={handleNext}
                    className="group flex items-center justify-center w-12 h-12 rounded-full border border-cyan-500/50 hover:border-cyan-400 bg-black shadow transition-all duration-300 hover:scale-105"
                    aria-label="Next project"
                >
                    <svg className="w-6 h-6 text-cyan-400 group-hover:text-cyan-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            {/* Coverflow Carousel */}
            <div
                className="relative mx-auto h-[70vh] min-h-[480px] max-w-7xl flex items-center justify-center overflow-visible"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {projects.map((project, index) => {
                    let role;
                    if (index === currentIndex) role = "center";
                    else if (index === prevIndex) role = "left";
                    else if (index === nextIndex) role = "right";
                    else role = "hidden";

                    let transformClasses =
                        "absolute top-1/2 left-1/2 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform w-[88vw] sm:w-[420px] lg:w-[520px] -translate-y-1/2";
                    if (role === "center") transformClasses += " z-30 -translate-x-1/2 scale-100 opacity-100";
                    else if (role === "left") transformClasses += " z-20 -translate-x-[150%] scale-70 opacity-85 cursor-pointer";
                    else if (role === "right") transformClasses += " z-20 -translate-x-[-50%] scale-70 opacity-85 cursor-pointer";
                    else transformClasses += " z-10 -translate-x-1/2 scale-75 opacity-0";

                    return (
                        <div
                            key={project.id}
                            className={transformClasses}
                            style={{ transitionProperty: 'opacity, transform' }}
                            onClick={role !== 'center' ? () => setCurrentIndex(index) : undefined}
                            tabIndex={role === 'center' ? 0 : -1}
                            aria-hidden={role !== 'center'}
                        >
                            <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl hover:shadow-cyan-400/30 relative border border-gray-800">
                                <div className="aspect-[16/10] md:aspect-[3/4] relative overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 ${role === 'center' ? 'scale-100' : 'scale-95 grayscale'}`}
                                    />
                                    {/* Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent ${role === 'center' ? 'opacity-100' : 'opacity-50'}`} />

                                    {/* Info */}
                                    <div className={`absolute bottom-0 left-0 right-0 p-6 sm:p-8 transition-all duration-500 ${role === 'center' ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                                        <div className="mb-3">
                                            <span
                                                className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${project.status === "Live"
                                                    ? "bg-green-400/20 text-green-400"
                                                    : project.status === "In Progress"
                                                        ? "bg-yellow-400/20 text-yellow-400"
                                                        : "bg-blue-400/20 text-blue-400"
                                                    }`}
                                            >
                                                {project.status}
                                            </span>
                                        </div>
                                        <h2 className="text-3xl font-semibold text-white mb-3">{project.title}</h2>
                                        <p className="text-gray-300 text-base mb-5">{project.description}</p>
                                        <div className="flex flex-wrap gap-2 mb-5">
                                            {project.techStack.map((tech) => (
                                                <span key={tech} className="px-2 py-1 bg-cyan-400/10 text-cyan-400 text-xs rounded-md backdrop-blur-sm">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="flex gap-4">
                                            {project.liveUrl && (
                                                <a
                                                    href={project.liveUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-4 py-2 bg-cyan-400 text-black rounded-lg font-medium hover:bg-cyan-300 transition-colors shadow"
                                                >
                                                    Live Demo
                                                </a>
                                            )}
                                            <a
                                                href={project.githubUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-medium hover:bg-cyan-400 hover:text-black transition-colors shadow"
                                            >
                                                Code
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-10">
                {projects.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3.5 h-3.5 rounded-full transition-all ${index === currentIndex ? 'bg-cyan-400 scale-110' : 'bg-gray-600 hover:bg-gray-500'
                            }`}
                    />
                ))}
            </div>

            {/* CTA */}
            <div className="text-center mt-16">
                <p className="text-gray-300 mb-4 text-lg">Explore more of my projects</p>
                <a
                    href="https://github.com/nikhil-partap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors group"
                >
                    View All Projects
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
