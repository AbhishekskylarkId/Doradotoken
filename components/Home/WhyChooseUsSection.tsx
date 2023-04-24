const WhyChooseUsSection = () => {
    return (
        <div className="why-choose-us-section" id="why-choose-us-section">
            <div className="custom-container">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-8">
                    WHY <span className="green-text">CHOOSE US</span>
                </h2>

                <p className="text text-white text-justify md:text-center pb-12 w-full lg:w-[50%] mx-auto">
                    Security: The website may have robust security measures in
                    place to <br className="hidden lg:block" /> protect user's
                    assets
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 xl:gap-16">
                    <div className="cursor-pointer why-choose-us-card-1 px-10 py-14 lg:p-5 xl:px-10 xl:py-14">
                        <img
                            className="w-2/5 mx-auto pb-4"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/why-choose-us-icon-1.svg"
                            alt="image"
                        />

                        <div>
                            <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                IT IS SMART
                            </h3>

                            <p className="text text-center text-white">
                                We are developing agile and resourceful
                                financial services and fund management with the
                                help of a team of Al/ML researchers from
                                prestigious institutions
                            </p>
                        </div>
                    </div>

                    <div className="cursor-pointer why-choose-us-card-2 px-10 py-14 lg:p-5 xl:px-10 xl:py-14">
                        <img
                            className="w-2/5 mx-auto pb-4"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/why-choose-us-icon-2.svg"
                            alt="image"
                        />

                        <div>
                            <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                IT IS SECURE
                            </h3>

                            <p className="text text-center text-white">
                                DSF is built on the BSC Blockchain, which is
                                fast, low on gas, and has a rising number of
                                validators, promising it to be firmer by the day
                            </p>
                        </div>
                    </div>

                    <div className="cursor-pointer why-choose-us-card-3 px-10 py-14 lg:p-5 xl:px-10 xl:py-14">
                        <img
                            className="w-2/5 mx-auto pb-4"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/why-choose-us-icon-3.svg"
                            alt="image"
                        />

                        <div>
                            <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                IT IS DECENTRALIZED
                            </h3>

                            <p className="text text-center text-white">
                                Our Al-backed Smart Contract, which is
                                decentralized, will provide you control over the
                                confidentiality of your data, investments, and
                                costs. It is Innovative
                            </p>
                        </div>
                    </div>

                    <div className="cursor-pointer why-choose-us-card-4 px-10 py-14 lg:p-5 xl:px-10 xl:py-14">
                        <img
                            className="w-2/5 mx-auto pb-4"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/why-choose-us-icon-4.svg"
                            alt="image"
                        />

                        <div>
                            <h3 className="heading-3 font-EvilEmpire text-center text-white pb-2">
                                IT IS INNOVATIVE
                            </h3>

                            <p className="text text-center text-white">
                                We use cutting edge technology and meld them
                                revolutionary and innovative projects
                                benefitting the community
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUsSection;
