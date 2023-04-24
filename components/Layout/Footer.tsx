import Link from "next/link";

const Footer = () => {
    return (
        <div className="footer-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="pb-8 md:pb-0">
                        <Link href="/">
                            <div className="pb-4">
                                <img
                                    className="w-48 mx-auto lg:mx-0 lg:mr-auto"
                                    src="/images/dorado-logo-2.png"
                                    alt="image"
                                />
                            </div>
                        </Link>

                        <div className="text-center lg:text-start">
                            <Link href="/">
                                <i className="fa-brands fa-square-instagram green-text hover:text-white text-4xl pr-4"></i>
                            </Link>

                            <Link href="/">
                                <i className="fa-brands fa-youtube green-text hover:text-white text-4xl pr-4"></i>
                            </Link>

                            <Link href="/">
                                <i className="fa-brands fa-square-facebook green-text hover:text-white text-4xl pr-4"></i>
                            </Link>

                            <Link href="/">
                                <i className="fa-brands fa-linkedin green-text hover:text-white text-4xl"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="text-center lg:text-start">
                        <h5 className="text-lg text-white font-EvilEmpire pb-8">
                            COMPANY
                        </h5>

                        <div className="pb-8">
                            <Link
                                className="text text-white hover:text-[#27e124]"
                                href="/#welcome-section"
                            >
                                About
                            </Link>
                        </div>

                        <div className="pb-8">
                            <Link
                                className="text text-white hover:text-[#27e124]"
                                href="/#road-map-section"
                            >
                                Roadmap
                            </Link>
                        </div>

                        <div className="pb-8">
                            <Link
                                className="text text-white hover:text-[#27e124]"
                                href="/#white-paper-section"
                            >
                                Whitepaper
                            </Link>
                        </div>

                        <div className="pb-8">
                            <Link
                                className="text text-white hover:text-[#27e124]"
                                href="/#token-economic-section"
                            >
                                Token Economy
                            </Link>
                        </div>
                    </div>

                    <div className="text-center lg:text-start">
                        <h5 className="text-lg text-white font-EvilEmpire pb-8">
                            Sales
                        </h5>

                        <div className="pb-8">
                            <Link
                                className="text text-white hover:text-[#27e124]"
                                href="/#play-and-earn-section"
                            >
                                Play
                            </Link>
                        </div>

                        <div className="pb-8">
                            <Link
                                className="text text-white hover:text-[#27e124]"
                                href="/#play-and-earn-section"
                            >
                                Earn
                            </Link>
                        </div>

                        <div className="pb-8">
                            <Link
                                className="text text-white hover:text-[#27e124]"
                                href="/#count-down-section"
                            >
                                Scholarship
                            </Link>
                        </div>

                        <div className="pb-8">
                            <Link
                                className="text text-white hover:text-[#27e124]"
                                href="/#wallet-section"
                            >
                                Wallet
                            </Link>
                        </div>
                    </div>

                    <div className="text-center lg:text-start">
                        <h5 className="text-lg text-white font-EvilEmpire pb-8">
                            NEWSLETTER
                        </h5>

                        <div>
                            <form>
                                <input
                                    type="text"
                                    className="bg-transparent border border-gray-300 text-white text rounded-lg focus:ring-[#27e124] focus:border-[#27e124] block w-full px-2.5 py-4 placeholder-gray-300 mb-3"
                                    placeholder="Enter your email address"
                                    required
                                />

                                <button
                                    type="submit"
                                    className="text-[#072626] bg-[#27e124] hover:bg-white focus:ring-4 focus:ring-[#28e4ab] rounded-lg text font-semibold px-5 mr-2 mb-2 focus:outline-none w-full py-4"
                                >
                                    Subscribe Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-t border-[#979797] mt-8 pt-8">
                    <p className="text text-white text-center">
                        Copyright &copy; Dorado All Rights Reserved
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
