const TokenEconomicSection = () => {
    return (
        <div className="token-economic-section" id="token-economic-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="flex items-center">
                        <div>
                            <h2 className="heading-2 font-EvilEmpire text-white text-center lg:text-start pb-8">
                                TOKEN{" "}
                                <span className="green-text">ECONOMICS</span>
                            </h2>

                            <p className="text text-white text-justify pb-8 w-full">
                                A Multi chain Token Ecosystem Built Exclusively
                                for Metaverse DeFi Gaming NFT Web 3.0 on
                                "Binance and Polygon Blockchain"
                            </p>

                            <p className="text text-white text-justify w-full">
                                Once you have a Avatar or NFT, you will be able
                                to mint one of the NFTS, which are 1:1 replicas
                                of Real- World. If your NFT wins, you are
                                rewarded in the Dorado metaverse
                            </p>
                        </div>
                    </div>

                    <div>
                        <img
                            className="w-4/5 ml-auto"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/token-economic-icon.svg"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TokenEconomicSection;
