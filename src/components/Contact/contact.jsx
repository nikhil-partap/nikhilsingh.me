import React from "react";

export default function Contact() {
    return (
        <div className="" >
            <section
                className="bg-black text-white pt-16 pb-40 bg-center bg-cover relative"
                style={{ backgroundImage: "url('/images/contact_bg.png')" }}
            >
                {/* Optional dark overlay for readability */}
                <div className="inset-0 bg-black/70">

                    <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12">

                        {/* Left Contact Info */}
                        <div>
                            <h2 className="text-3xl font-bold text-cyan-400 mb-4">Get in touch</h2>
                            <p className="text-gray-300 mb-8">
                                Proin volutpat consequat porttitor cras nullam gravida at. Orci molestie a eu arcu.
                                Sed ut tincidunt integer elementum id sem. Arcu sed malesuada et magna.
                            </p>

                            <dl className="space-y-6">
                                <div>
                                    <dt className="flex items-center gap-3 font-semibold text-lg">
                                        <svg
                                            className="w-6 h-6 text-cyan-400"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Address
                                    </dt>
                                    <dd className="text-gray-400 ml-9">
                                        545 Mavis Island<br />Chicago, IL 99191
                                    </dd>
                                </div>

                                <div>
                                    <dt className="flex items-center gap-3 font-semibold text-lg">
                                        <svg
                                            className="w-6 h-6 text-cyan-400"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25A2.25 2.25 0 0 0 21.75 19.5v-1.372a1.125 1.125 0 0 0-.852-1.091l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102A1.125 1.125 0 0 0 5.872 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Telephone
                                    </dt>
                                    <dd className="text-gray-400 ml-9">
                                        <a
                                            href="tel:+1 (555) 234-5678"
                                            className="hover:text-cyan-400 transition"
                                        >
                                            +1 (555) 234-5678
                                        </a>
                                    </dd>
                                </div>

                                <div>
                                    <dt className="flex items-center gap-3 font-semibold text-lg">
                                        <svg
                                            className="w-6 h-6 text-cyan-400"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="1.5"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15A2.25 2.25 0 0 0 2.25 6.75v.243a2.25 2.25 0 0 0 1.07 1.916l7.5 4.615a2.25 2.25 0 0 0 2.36 0l7.5-4.615a2.25 2.25 0 0 0 1.07-1.916V6.75"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        Email
                                    </dt>
                                    <dd className="text-gray-400 ml-9">
                                        <a
                                            href="mailto:hello@example.com"
                                            className="hover:text-cyan-400 transition"
                                        >
                                            hello@example.com
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>

                        {/* Contact Form */}
                        <form className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block mb-2 text-sm font-medium">First name</label>
                                    <input
                                        id="first-name"
                                        type="text"
                                        className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/40"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block mb-2 text-sm font-medium">Last name</label>
                                    <input
                                        id="last-name"
                                        type="text"
                                        className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/40"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/40"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone-number" className="block mb-2 text-sm font-medium">Phone number</label>
                                <input
                                    id="phone-number"
                                    type="tel"
                                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/40"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full p-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:border-cyan-400 focus:ring focus:ring-cyan-400/40"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 px-6 rounded-lg bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition focus:ring focus:ring-cyan-400/50"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}
