import Link from "next/link";
import { useState } from "react";
import { Link as Scroll } from "react-scroll/modules";

const Header = () => {
    const [showNav, setShowNav] = useState(false);
    const [active, setActive] = useState("HOME");

    const handleActive = (name: string) => {
        setActive(name);
    };

    const handleShowNav = () => {
        setShowNav((prevState) => {
            return !prevState;
        });
    };

    return (
        <>
            {/* For Web */}
            <div className="header-section py-3 lg:px-5 xl:px-10 hidden lg:block">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/">
                            <img
                                className="w-48"
                                src="/images/dorado-logo-2.png"
                                alt="image"
                            />
                        </Link>
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="lg:mr-3 xl:mr-8">
                            <Link
                                href="/"
                                className={`text-lg font-EvilEmpire text-center text-white ${
                                    active === "HOME" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("HOME")}
                            >
                                HOME
                            </Link>
                        </div>

                        <div className="lg:mr-3 xl:mr-8">
                            <Link
                                href="/#welcome-section"
                                className={`text-lg font-EvilEmpire text-center text-white ${
                                    active === "ABOUT" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("ABOUT")}
                            >
                                <Scroll
                                    activeClass="active"
                                    to="welcome-section"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    ABOUT
                                </Scroll>
                            </Link>
                        </div>

                        <div className="lg:mr-3 xl:mr-8">
                            <Link
                                href="/#why-choose-us-section"
                                className={`text-lg font-EvilEmpire text-center text-white ${
                                    active === "FEATURES" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("FEATURES")}
                            >
                                <Scroll
                                    activeClass="active"
                                    to="why-choose-us-section"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1000}
                                >
                                    FEATURES
                                </Scroll>
                            </Link>
                        </div>

                        <div className="lg:mr-3 xl:mr-8">
                            <Link
                                href="/#road-map-section"
                                className={`text-lg font-EvilEmpire text-center text-white ${
                                    active === "ROADMAP" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("ROADMAP")}
                            >
                                <Scroll
                                    activeClass="active"
                                    to="road-map-section"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1300}
                                >
                                    ROADMAP
                                </Scroll>
                            </Link>
                        </div>

                        <div className="lg:mr-3 xl:mr-8">
                            <Link
                                href="/buy"
                                className={`text-lg font-EvilEmpire text-center text-white ${
                                    active === "STAKE" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("STAKE")}
                            >
                                STAKE
                            </Link>
                        </div>

                        <div className="lg:mr-3 xl:mr-8">
                            <Link
                                href="/#play-and-earn-section"
                                className={`text-lg font-EvilEmpire text-center text-white ${
                                    active === "PLAY" &&
                                    "underline underline-offset-4 decoration-4"
                                }`}
                                onClick={() => handleActive("PLAY")}
                            >
                                <Scroll
                                    activeClass="active"
                                    to="play-and-earn-section"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={500}
                                >
                                    PLAY
                                </Scroll>
                            </Link>
                        </div>

                        <div>
                            <Link
                                href="/#wallet-section"
                                className={`text-lg font-EvilEmpire text-center text-yellow-300 ${
                                    active === "Wallet Connect" && ""
                                }`}
                                onClick={() => handleActive("Wallet Connect")}
                            >
                                <Scroll
                                    activeClass="active"
                                    to="wallet-section"
                                    spy={true}
                                    smooth={true}
                                    offset={0}
                                    duration={1500}
                                >
                                    Wallet Connect
                                </Scroll>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <Link href={"/buy"}>
                            <img
                                className="w-full"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/buy-btn.svg"
                                alt="image"
                            />
                        </Link>
                    </div>
                </div>
            </div>

            {/* For Tab And Mobile */}
            <div className="block lg:hidden">
                <nav className="py-2.5 w-full">
                    <div className="flex flex-wrap items-center justify-between mx-auto">
                        <Link href="/">
                            <img
                                className="w-48"
                                src="/images/dorado-logo-2.png"
                                alt="image"
                            />
                        </Link>

                        <div className="flex lg:order-2">
                            <button
                                data-collapse-toggle="navbar-sticky"
                                type="button"
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                                aria-controls="navbar-sticky"
                                aria-expanded="false"
                                onClick={handleShowNav}
                            >
                                <span className="sr-only">Open main menu</span>
                                <svg
                                    className="w-6 h-6"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                        <div
                            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
                                showNav ? "flex" : "hidden"
                            }`}
                            id="navbar-sticky"
                        >
                            <ul className="flex flex-col w-full p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 lg:flex-row lg:space-x-8 lg:mt-0 lg:text-sm lg:font-medium lg:border-0 lg:bg-white">
                                <li>
                                    <Link
                                        href="/"
                                        className={`block py-2 pl-3 pr-4 text-white rounded ${
                                            active === "HOME" && "bg-[#27e124]"
                                        }`}
                                    >
                                        Home
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#welcome-section"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "ABOUT" && "bg-[#27e124]"
                                        }`}
                                    >
                                        <Scroll
                                            activeClass="active"
                                            to="welcome-section"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >
                                            ABOUT
                                        </Scroll>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#why-choose-us-section"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "FEATURES" &&
                                            "bg-[#27e124]"
                                        }`}
                                    >
                                        <Scroll
                                            activeClass="active"
                                            to="why-choose-us-section"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={1000}
                                        >
                                            FEATURES
                                        </Scroll>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#road-map-section"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "ROADMAP" &&
                                            "bg-[#27e124]"
                                        }`}
                                    >
                                        <Scroll
                                            activeClass="active"
                                            to="road-map-section"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={1300}
                                        >
                                            ROADMAP
                                        </Scroll>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/buy"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "STAKE" && "bg-[#27e124]"
                                        }`}
                                    >
                                        Stake
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#play-and-earn-section"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "PLAY" && "bg-[#27e124]"
                                        }`}
                                    >
                                        <Scroll
                                            activeClass="active"
                                            to="play-and-earn-section"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={500}
                                        >
                                            PLAY
                                        </Scroll>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/#wallet-section"
                                        className={`block py-2 pl-3 pr-4 text-yellow-300 rounded ${
                                            active === "Wallet Connect" &&
                                            "bg-[#27e124]"
                                        }`}
                                    >
                                        <Scroll
                                            activeClass="active"
                                            to="wallet-section"
                                            spy={true}
                                            smooth={true}
                                            offset={0}
                                            duration={1500}
                                        >
                                            Wallet Connect
                                        </Scroll>
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        href="/buy"
                                        className={`block py-2 pl-3 pr-4 text-gray-700 rounded ${
                                            active === "BUY" && "bg-[#27e124]"
                                        }`}
                                    >
                                        Buy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
