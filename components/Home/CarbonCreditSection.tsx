import { useState } from "react";

const CarbonCreditSection = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="carbon-credit-section" id="carbon-credit-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex items-center">
                        <div>
                            <h2 className="heading-2 font-EvilEmpire text-white text-center lg:text-start pb-8">
                                CARBON{" "}
                                <span className="green-text">CREDITS NFT</span>
                            </h2>

                            <p className="text text-white text-justify pb-12 w-full">
                                {/* Partial Text */}
                                <span
                                    className={`${show ? "hidden" : "block"}`}
                                >
                                    Dorado Token is a Bridge between Carbon
                                    Credit combination of Web 3.0 (NFT) and
                                    Environment enhancements to buy Carbon
                                    Credits to ensure the transparency and
                                    secure of every transaction that is
                                    performed by every user resulting in
                                    Sophistication of Planet Earth...{" "}
                                </span>

                                {/* Full Text */}
                                <span
                                    className={`${show ? "block" : "hidden"}`}
                                >
                                    Dorado Token is a Bridge between Carbon
                                    Credit combination of Web 3.0 (NFT) and
                                    Environment enhancements to buy Carbon
                                    Credits to ensure the transparency and
                                    secure of every transaction that is
                                    performed by every user resulting in
                                    Sophistication of Planet Earth by making
                                    more Eco Friendly and Developing the
                                    Renewable energy
                                    <br /> <br />
                                    Using nonfungible tokens (NFTs) as carbon
                                    credits or carbon offsets reveals an outlet
                                    for Web3 technology to foster a more
                                    environmentally friendly future. NFTs as
                                    carbon credits are a Trending Globally in
                                    the{" "}
                                    <span className="font-semibold">
                                        Regenerative Finance (Refi)
                                    </span>{" "}
                                    and{" "}
                                    <span className="font-semibold">
                                        Decentralized Finance (Defi)
                                    </span>{" "}
                                    markets. Most of this activity currently
                                    takes place on the Binance blockchain as it
                                    has already offset its entire carbon
                                    footprint
                                </span>

                                <span
                                    className="green-text cursor-pointer"
                                    onClick={handleShow}
                                >
                                    {show ? "hide" : "See more."}
                                </span>
                            </p>
                        </div>
                    </div>

                    <div>
                        <img
                            className="w-4/5 mx-auto lg:ml-auto"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/carbon-credit-icon.svg"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarbonCreditSection;
