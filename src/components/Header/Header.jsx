import React from "react";
import { Link, NavLink } from "react-router-dom";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";

import {
  HomeIcon,
  InformationCircleIcon,
  FolderIcon,
  EnvelopeIcon,
  // Optional alternates:
  CubeIcon,
} from "@heroicons/react/24/outline";

// Data for the dropdown
const solutions = [
  { name: "Home", description: "", href: "/", icon: HomeIcon },
  { name: "About", description: "", href: "/about", icon: InformationCircleIcon },
  { name: "Projects", description: "", href: "/projects", icon: CubeIcon },
  { name: "Contact Me", description: "", href: "/contact", icon: EnvelopeIcon },
  // { name: "Automations", description: "", href: "#", icon: ArrowPathIcon },
];
const callsToAction = [
  // { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  // { name: "Contact sales", href: "#", icon: PhoneIcon },
];

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 flex items-center justify-between">
      {/* Your Logo or Brand */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="mr-3 h-12"
          />
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex items-center gap-6">
        {/* 🔽 New Popover Dropdown */}
        <Popover className="relative outline-none rounded-full">
          <PopoverButton className="inline-flex outline-none mr-[30px] items-center gap-x-1 text-sm font-semibold text-white">
            <div  >
              <button className="relative group outline-none">
                <div className="relative  flex flex-col overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-gray-900 ring-0 ring-cyan-400 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md outline-none">
                  <div className="transform transition-all duration-150 overflow-hidden -translate-y-5 group-focus:translate-y-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 animate-bounce text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  </div>

                  <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden -translate-y-3">
                    <div className="bg-white mb-1.5 h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-40 group-hover:bg-cyan-400"></div>
                    <div className="bg-white mb-1.5 h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-y-6 delay-115 group-hover:bg-cyan-400"></div>
                    <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:translate-y-6 delay-140 group-hover:bg-cyan-400"></div>
                  </div>
                </div>
              </button>
            </div>
          </PopoverButton>


          <PopoverPanel
            transition
            className="absolute right-0 z-50 mt-5 flex w-64 bg-transparent px-4
                       transition data-closed:translate-y-1 data-closed:opacity-0 
                       data-enter:duration-200 data-enter:ease-out 
                       data-leave:duration-150 data-leave:ease-in"
          >
            <div className="w-screen max-w-sm flex-auto overflow-hidden rounded-3xl bg-gray-800 text-sm outline-1 -outline-offset-1 outline-white/10">
              <div className="p-4">
                {solutions.map((item) => (
                  <div key={item.name} className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-white/5">
                    <div className="mt-1 flex w-11 h-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon aria-hidden="true" className="w-6 h-6 text-gray-400 group-hover:text-white" />
                    </div>
                    <div>
                      <Link to={item.href} className="font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </Link>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-white/10 bg-gray-700/50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-white hover:bg-gray-700/50"
                  >
                    <item.icon aria-hidden="true" className="w-5 h-5 text-gray-500" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </PopoverPanel>
        </Popover>
        {/* <NavLink to="/" className="hover:text-cyan-400">Home</NavLink> */}
        {/* <NavLink to="/about" className="hover:text-cyan-400">About</NavLink> */}
      </nav>
    </header >
  );
}
