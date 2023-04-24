const CombatGameSection = () => {
    return (
        <div className="combat-game-section" id="combat-game-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="grid grid-cols-1 md:grid-cols-3">
                        <div className="col-span-2">
                            <img
                                className="w-full zoom-in-animation"
                                src="/images/combat-game-pc.png"
                                alt="image"
                            />
                        </div>

                        <div>
                            <img
                                className="w-full zoom-in-animation"
                                src="/images/combat-game-mobile.png"
                                alt="image"
                            />
                        </div>
                    </div>

                    <div className="flex items-center">
                        <div>
                            <h2 className="heading-2 font-EvilEmpire text-white text-center lg:text-start pb-8">
                                COMBAT <span className="green-text">GAME</span>
                            </h2>

                            <p className="text text-white text-justify pb-12 w-full">
                                Earn fame and glory as you command your
                                upgradeable NFT WarShips equipped with the
                                latest weapons and mods. Use your tactical
                                decision-making skills to outsmart and defeat
                                your opponents in strategic turn-based combat
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CombatGameSection;
