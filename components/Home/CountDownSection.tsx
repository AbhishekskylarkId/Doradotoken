import Link from "next/link";
import { useEffect, useState } from "react";

// For Count Down
function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-9-3`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
        timeLeft = {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / 1000 / 60) % 60),
            seconds: Math.floor((difference / 1000) % 60),
        };
    }

    return timeLeft;
}

const CountDownSection = () => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft() as any);

    useEffect(() => {
        const id = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => {
            clearTimeout(id);
        };
    });

    return (
        <div className="count-down-section" id="count-down-section">
            <div className="custom-container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                    <div>
                        <h2 className="heading-2 font-EvilEmpire text-white text-center lg:text-start pb-8">
                            CRYPTO THE REVOLUTION{" "}
                            <br className="hidden xl:block" />
                            <span className="green-text">DRD TOKEN</span>
                        </h2>

                        <p className="text text-white text-justify pb-12 w-full lg:w-[60%]">
                            Participate in our only IGO before Dorado Gaming Metavarse is launched
                             and get Good Appreciation Value.
                            The IGO is very much limited. You will never get an opportunity to
                            acquire Dorado Tokens at this price. Very limited
                            supply so "Hurry UP" for an opportunity never to be
                            missed.
                        </p>

                        <div className="flex justify-center lg:justify-start">
                            <Link href="/buy">
                                <img
                                    className="w-full pr-4"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/buy-tokens-btn.svg"
                                    alt="image"
                                />
                            </Link>

                            <Link href="/#white-paper-section">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/white-paper-btn.svg"
                                    alt="image"
                                />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <div className="text-center lg:text-right pb-10" style={{marginLeft: "37%"}}>
                            <p className="text font-semibold " style={{textAlign:'left'}}>
                            Total Supply - <span className="green-text">11,11,11,111</span> Tokens</p>
                            <p className="text font-semibold " style={{textAlign:'left'}}>
Total tokens <span className="green-text">Unlocks strategically for 10 Years</span></p>
{/* <p className="text font-semibold " style={{textAlign:'inherit'}}>
50% Tokens Locked for <span className="text" style={{color:'#ebea01'}}>Metaverse, Gaming Rewards</span></p> */}
<p className="text font-semibold " style={{textAlign:'left'}}>
Strategic Burn <span className="green-text">as Per White Paper</span>
                            </p>

                            {/* <p className="text green-text">
                                Token For Website Sale: 55, 55, 555
                            </p> */}

                            <p className="text font-semibold"  style={{textAlign:'left'}}>
                                Public Sale Price: TBA Before IGO
                            </p>
                        </div>

                        <div className="token-sell-ends-count p-5 lg:px-10 lg:py-5 mb-10">
                            <p className="text green-text pb-5 text-center">
                                TOKEN SALE BEGINSS
                            </p>

                            <div className="flex items-center justify-between">
                                <div className="text-4xl green-text font-semiBold font-EvilEmpire">
                                    {timeLeft.days}
                                </div>

                                <div className="text-4xl green-text font-semiBold font-EvilEmpire">
                                    :
                                </div>

                                <div className="text-4xl green-text font-semiBold font-EvilEmpire">
                                    {timeLeft.hours}
                                </div>

                                <div className="text-4xl green-text font-semiBold font-EvilEmpire">
                                    :
                                </div>

                                <div className="text-4xl green-text font-semiBold font-EvilEmpire">
                                    {timeLeft.minutes}
                                </div>

                                <div className="text-4xl green-text font-semiBold font-EvilEmpire">
                                    :
                                </div>

                                <div className="text-4xl green-text font-semiBold font-EvilEmpire">
                                    {timeLeft.seconds}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="token-sell-meter-container mb-1">
                                <div className="token-sell-meter w-[30%] m-[6px]"></div>
                            </div>

                            <div className="text-white absolute top-[28%] right-[4%]">
                                0.5%
                            </div>
                        </div>

                        <div className="text-center lg:text-right text-white">
                            Hardcap
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountDownSection;
