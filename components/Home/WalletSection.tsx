import Link from "next/link";

const WalletSection = () => {
    return (
        <div className="wallet-section" id="wallet-section">
            <div className="custom-container">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-8">
                    ALL WALLET <span className="green-text">OPTIONS</span>
                </h2>

                <p className="text text-white text-justify md:text-center pb-12 w-full lg:w-[50%] mx-auto">
                    A token wallet is a digital wallet that can be used to
                    store, send, and receive various types of tokens, such as
                    cryptocurrencies and other digital assets.
                </p>
                {/* .flip-img class added  */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5 gap-8 lg:gap-16">
                    <Link href="/buy">
                        <div className="flip-box">
                            <img
                                className="w-1/3 mx-auto pb-1 flip-img rounded-full"
                                src="/images/meta-mask-wallet.png"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    Meta mask
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the top{" "}
                                    <br className="hidden xl:block" /> places
                                    holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div className="flip-box">
                            <img
                                className="w-1/3 mx-auto pb-1 flip-img"
                                src="/images/dorado-logo.png"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    Dorado Wallet
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the top{" "}
                                    <br className="hidden xl:block" /> places
                                    holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div className="flip-box">
                            <img
                                className="w-1/3 mx-auto pb-1 flip-img"
                                src="/images/trust-wallet.png"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    Trust Wallet
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the top{" "}
                                    <br className="hidden xl:block" /> places
                                    holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div className="flip-box">
                            <img
                                className="w-1/3 mx-auto pb-1 flip-img"
                                src="/images/pancake-swap-wallet.png"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    Pancake Swap
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the top{" "}
                                    <br className="hidden xl:block" /> places
                                    holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>

                    <Link href="/buy">
                        <div className="flip-box">
                            <img
                                className="w-1/3 mx-auto pb-1 flip-img rounded-full"
                                src="/images/polygon-wallet.png"
                                alt="image"
                            />

                            <img
                                className="w-3/4 mx-auto pb-6"
                                src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/fire.svg"
                                alt="image"
                            />

                            <div>
                                <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                                    Polygon
                                </h3>

                                <p className="text text-center pb-5">
                                    Complete for the top{" "}
                                    <br className="hidden xl:block" /> places
                                    holder
                                </p>

                                <img
                                    className="w-3/5 mx-auto"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/buy-btn.svg"
                                    alt="image"
                                />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default WalletSection;
