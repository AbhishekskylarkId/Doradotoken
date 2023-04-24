const TokenDistributionSection = () => {
    return (
        <div
            className="token-distribution-section"
            id="token-distribution-section"
        >
            <div className="custom-container">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-8">
                    TOKEN DISTRIBUTION <span className="green-text">MODEL</span>
                </h2>

                <p className="text text-white text-justify md:text-center pb-12 w-full lg:w-[50%] mx-auto">
                    <span className="font-bold green-text">
                        Total Token Supply: 11, 11, 11, 111
                    </span>{" "}
                    Tokens Total tokens Locked for 10 Years Token Released Every
                    Day - 50% Tokens Locked for Metaverse, Gaming Rewards
                    Strategic Burn as Per White Paper Token Listing and Sale
                    Prices
                </p>

                <div>
                    <img
                        className="w-full lg:w-[65%] mx-auto"
                        src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/token-distribution-chart.png"
                        alt="image"
                    />
                </div>
            </div>
        </div>
    );
};

export default TokenDistributionSection;
