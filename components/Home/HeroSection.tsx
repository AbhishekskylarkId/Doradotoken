import Link from "next/link";
import { useState } from "react";
import ReactPlayer from "react-player";
import LoadingScreen from "../Common/LoadingScreen";
import Header from "../Layout/Header";

const HeroSection = () => {
    const [showLoader, setShowLoader] = useState(true);

    return (
        <div className="hero-section player-wrapper" id="hero-section">
            {/* For Web */}
            <div className="hidden lg:block">
                <div className={`${showLoader ? "block" : "hidden"}`}>
                    <LoadingScreen />
                </div>

                <ReactPlayer
                    className="player-wrapper w-full"
                    url="https://spectacular-cucurucho-f4568c.netlify.app/images/hero-section-video.mp4"
                    playing
                    muted
                    loop
                    width="100%"
                    height="100%"
                    preload="none"
                    config={{
                        file: {
                            attributes: {
                                poster: "https://moonlit-snickerdoodle-f90af8.netlify.app/images/hero-section-icon.png",
                            },
                        },
                    }}
                    onReady={() => setShowLoader(false)}
                />
            </div>

            {/* For Tablet */}
            <div className="hidden md:block lg:hidden">
                <div className={`${showLoader ? "block" : "hidden"}`}>
                    <LoadingScreen />
                </div>
                <ReactPlayer
                    className="player-wrapper"
                    url="https://spectacular-cucurucho-f4568c.netlify.app/images/hero-section-video-tablet.mp4"
                    playing
                    muted
                    loop
                    width="100%"
                    height="100%"
                    preload="none"
                    config={{
                        file: {
                            attributes: {
                                poster: "https://moonlit-snickerdoodle-f90af8.netlify.app/images/hero-section-icon.png",
                            },
                        },
                    }}
                    onReady={() => setShowLoader(false)}
                />
            </div>

            {/* For Mobile */}
            <div className="block md:hidden">
                <div className={`${showLoader ? "block" : "hidden"}`}>
                    <LoadingScreen />
                </div>

                <ReactPlayer
                    className="player-wrapper"
                    url="https://spectacular-cucurucho-f4568c.netlify.app/images/hero-section-video-mobile.mp4"
                    playing
                    muted
                    loop
                    width="100%"
                    height="100%"
                    preload="none"
                    config={{
                        file: {
                            attributes: {
                                poster: "https://moonlit-snickerdoodle-f90af8.netlify.app/images/hero-section-icon.png",
                            },
                        },
                    }}
                    onReady={() => setShowLoader(false)}
                />
            </div>

            <div className="absolute top-0 lg:top-4 w-full px-5 md:px-10 z-20">
                <Header />
            </div>

            <div className="absolute m-auto bottom-0 left-0 right-0 top-[20vh] md:top-[26vh] lg:top-[66vh]">
                <div>
                    <h1 className="text-4xl md:text-5xl lg:heading-1 font-EvilEmpire text-white text-green-shadow text-center mb-3">
                        <p className="mb-0 lg:mb-3">REFORMING</p>
                        <p>THE GAMING INDUSTRY</p>
                    </h1>

                    <div className="flex items-center justify-center">
                        <Link href={"/#play-and-earn-section"}>
                            <img
                                className="w-[120px] md:w-full lg:w-[180px]"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/play-btn.svg"
                                alt="image"
                            />
                        </Link>

                        <div className="p-2"></div>

                        <Link href={"/buy"}>
                            <img
                                className="w-[120px] md:w-full lg:w-[180px]"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/stake-now-btn.svg"
                                alt="image"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
