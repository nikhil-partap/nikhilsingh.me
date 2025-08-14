import react from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0 shadow-white">
      <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center" />
          <img
            src="/images/Logo.png"
            className="mr-3 h-12"
            alt="Logo"
          />

          <div className="flex items-center lg:order-2">

            {/* <Link
              to="#"
              className="
            text-cyan-400 
            border border-cyan-400 
            hover:bg-cyan-400 
            hover:text-black 
            focus:ring-2 
            focus:ring-cyan-500 
            font-medium 
            rounded-lg 
            text-sm 
            px-4 lg:px-5 
            py-2 lg:py-2.5 
            mr-2 
            focus:outline-none 
            transition 
            duration-300
          "
            >
              Log in
            </Link> */}

            {/* Contact Me -> Solid + Neon Glow */}
            <Link
              to="/contact"
              className="
            bg-cyan-400 
            text-black 
            hover:bg-cyan-300 
            focus:ring-2 
            focus:ring-cyan-500 
            font-semibold 
            rounded-lg 
            text-sm 
            px-4 lg:px-5 
            py-2 lg:py-2.5 
            mr-2 
            focus:outline-none 
            transition 
            duration-300 
            shadow-[0_0_10px_rgba(34,211,238,0.6),0_0_20px_rgba(34,211,238,0.6)]
            hover:shadow-[0_0_20px_rgba(34,211,238,0.9),0_0_40px_rgba(34,211,238,0.9)]
          "
            >
              Contact Me
            </Link>
          </div>

          {/* Menu */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-400 lg:p-0 ${isActive ? "text-cyan-400 font-bold" : "text-white"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-400 lg:p-0 ${isActive ? "text-cyan-400 font-bold" : "text-white"
                    }`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/github"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-400 lg:p-0 ${isActive ? "text-cyan-400 font-bold" : "text-white"
                    }`
                  }
                >
                  Github
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-cyan-400 lg:p-0 ${isActive ? "text-cyan-400 font-bold" : "text-white"
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </header>

  );
}
