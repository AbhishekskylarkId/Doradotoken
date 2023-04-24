import { useState } from "react";

const WhitePaperSection = () => {
    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="white-paper-section" id="white-paper-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex items-center">
                        <div>
                            <h2 className="heading-2 font-EvilEmpire text-white text-center lg:text-start pb-8">
                                WHITE<span className="green-text">PAPER</span>
                            </h2>

                            <p className="text text-white text-justify pb-12 w-full">
                                {/* Partial Text */}
                                <span
                                    className={`${show ? "hidden" : "block"}`}
                                >
                                    A whitepaper is an authoritative report or
                                    guide that informs readers concisely about a
                                    complex issue and presents the issuing
                                    body's philosophy on the matter. It is meant
                                    to help readers understand an issue, solve a
                                    problem, or make a decision. Brickken has
                                    created this whitepaper to educate its
                                    audience regarding Security Token Offerings,
                                    its current situation...{" "}
                                </span>

                                {/* Full Text */}
                                <span
                                    className={`${show ? "block" : "hidden"}`}
                                >
                                    A whitepaper is an authoritative report or
                                    guide that informs readers concisely about a
                                    complex issue and presents the issuing
                                    body's philosophy on the matter. It is meant
                                    to help readers understand an issue, solve a
                                    problem, or make a decision. Brickken has
                                    created this whitepaper to educate its
                                    audience regarding Security Token Offerings,
                                    its current situation, legality, and issues
                                    that need to be tackled to allow companies
                                    to self-crowdfund using Brickken's
                                    technology and know-how, in a decentralized
                                    ecosystem. This whitepaper embodies
                                    Brickken's values and vision and provides a
                                    theorical and practical approach as to how
                                    it will scale the use of Security Token
                                    Offerings, to make tokenization a viable
                                    alternative financial instrument to be used
                                    by companies, and mechanism for investors to
                                    generate passive income
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
                            className="w-full"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/white-paper-icon.svg"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhitePaperSection;
