import Link from "next/link";
import { useState } from "react";

const PlayAndEarnSection = () => {
    const [activeCard, setActiveCard] = useState("Collect to Earn");

    const handleActiveCard = (name: string) => {
        setActiveCard(name);
    };

    return (
        <div className="play-and-earn-section" id="play-and-earn-section">
            <div className="custom-container">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-8">
                    PLAY AND <span className="green-text">EARN</span>
                </h2>

                <p className="text text-white text-justify md:text-center pb-12 w-full lg:w-[50%] mx-auto">
                    You can purchase any car of your choice from the
                    marketplace. <br className="hidden lg:block" /> They come in
                    varying engine capacity, traits and price tags
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                    <Link href="/#rent-to-earn">
                        <div
                            className={`card play-and-earn-card-1 p-4 md:p-6 h-[100%] ${
                                activeCard === "Rent to Earn" && "active-card"
                            }`}
                            onClick={() => handleActiveCard("Rent to Earn")}
                        >
                            <img
                                className="w-full pb-5"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/play-and-earn-img-1.png"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                    Rent to Earn
                                </h3>

                                <p className="text text-center text-white">
                                    Renting NFTs can become an inseparable part
                                    of the DeFi and GameFi industries by solving
                                    the issue of high entry barriers and costly
                                    transaction fees. You can Rent your NFTs to
                                    Others who can’t afford to Buy the NFT’s
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/#collect-to-earn">
                        <div
                            className={`card play-and-earn-card-2 p-4 md:p-6 h-[100%] ${
                                activeCard === "Collect to Earn" &&
                                "active-card"
                            }`}
                            onClick={() => handleActiveCard("Collect to Earn")}
                        >
                            <img
                                className="w-full pb-5"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/play-and-earn-img-2.png"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                    Collect to Earn
                                </h3>

                                <p className="text text-center text-white">
                                    With the blockchain, gamers can sell what
                                    they manage to collect in the game, turning
                                    their video game spending into investing.
                                    While more and more gaming developers have
                                    begun to dabble in the NFT space, most
                                    blockchain games in this generation are less
                                    interesting and fun than traditional video
                                    games
                                </p>
                            </div>
                        </div>
                    </Link>

                    <Link href="/#scholarship-model">
                        <div
                            className={`card play-and-earn-card-3 p-4 md:p-6 h-[100%] ${
                                activeCard === "Scholarship Model" &&
                                "active-card"
                            }`}
                            onClick={() =>
                                handleActiveCard("Scholarship Model")
                            }
                        >
                            <img
                                className="w-full pb-5"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/play-and-earn-img-3.png"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                    Scholarship Model
                                </h3>

                                <p className="text text-center text-white">
                                    A scholarship is a popular pathway to
                                    onboard newcomers to NFT games. Dorado
                                    provides scholarships to new players as a
                                    rewards-sharing model, where the Players
                                    acquires NFT assets and rents them to new
                                    players so they can start playing and
                                    earning in-game tokens without spending any
                                    money
                                </p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PlayAndEarnSection;
