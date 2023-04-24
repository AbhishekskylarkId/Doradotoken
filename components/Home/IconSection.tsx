const IconSection = () => {
    return (
        <div className="icon-section" id="icon-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
                    <div>
                        <img
                            className="w-2/4 mx-auto pb-5"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/icon-img-1.svg"
                            alt="image"
                        />

                        <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                            TRADE CARBON <br />
                            <span className="green-text">NFT</span>
                        </h3>
                    </div>

                    <div>
                        <img
                            className="w-2/4 mx-auto pb-5"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/icon-img-2.svg"
                            alt="image"
                        />

                        <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                            RACE AND RENT <br />
                            <span className="green-text">CAR NFT</span>
                        </h3>
                    </div>

                    <div>
                        <img
                            className="w-2/4 mx-auto pb-5"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/icon-img-3.svg"
                            alt="image"
                        />

                        <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                            PLAY <br />
                            <span className="green-text">TOURNAMENT</span>
                        </h3>
                    </div>

                    <div>
                        <img
                            className="w-2/4 mx-auto pb-5"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/icon-img-4.svg"
                            alt="image"
                        />

                        <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                            COLLECT AND SHARE WAR{" "}
                            <br className="hidden md:block lg:hidden" />
                            <span className="green-text">WEAPONS</span>
                        </h3>
                    </div>

                    <div>
                        <img
                            className="w-2/4 mx-auto pb-5"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/icon-img-5.svg"
                            alt="image"
                        />

                        <h3 className="heading-3 text-center text-white font-EvilEmpire pb-2">
                            ACHIEVE <br />
                            <span className="green-text">REWARDS DAILY</span>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IconSection;
