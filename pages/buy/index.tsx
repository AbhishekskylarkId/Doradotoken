import { useEffect, useState } from "react";
import Header from "../../components/Layout/Header";

// For Count Down
function calculateTimeLeft() {
    const year = new Date().getFullYear();
    const difference = +new Date(`${year}-8-15`) - +new Date();
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

const index = () => {
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
        <>
            {/* For Web */}
            <div className="buy-page custom-container hidden lg:block">
                <div className="relative">
                    <div className="absolute w-[90%] z-10 right-0 left-0 top-10 m-auto">
                        <Header />
                    </div>

                    <div className="count-down-box lg:rounded-0 xl:rounded-[50px] custom-container">
                        <div className="flex items-center justify-center h-full">
                            <div className="w-full md:w-[50%] mr-10">
                                <h2 className="heading-2 font-EvilEmpire text-white text-center lg:text-start pb-8">
                                    CRYPTO THE REVOLUTION{" "}
                                    <span className="green-text">
                                        DRD TOKEN
                                    </span>
                                </h2>

                                <p className="text text-white text-justify pb-8 w-full">
                                    Participate in Our Only Public Sale before
                                    we get listed on Exchanges and get Good
                                    Appreciation Value. The Public sale is very
                                    much Limited of only 0.5% of total Supply.
                                    You will never get an Oppertunity to Acquire
                                    Dorado Tokens at this Price .Very Limited
                                    Supply so "Hurry UP" for an Oppertunity
                                    never to be Missed
                                </p>
                            </div>

                            <div className="w-full md:w-[50%]">
                                <div className="pb-10 text text-center lg:text-start">
                                    <p className="font-semibold green-text">
                                        Total Token Supply: 11, 11, 11, 111
                                    </p>

                                    <p className="text green-text">
                                        Token For Website Sale: 55, 55, 555
                                    </p>

                                    <p className="text">
                                        Public Sale Price: TBA Before IDO
                                    </p>
                                </div>

                                <div className="token-sell-ends-count p-5 lg:px-10 lg:py-5 mb-10">
                                    <p className="text green-text pb-5 text-center">
                                        TOKEN SALE BEGINS
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
            </div>

            {/* For Tab And Mobile */}
            <div className="block lg:hidden">
                <div className="bg-white">
                    <div className="custom-container-x">
                        <Header />
                    </div>
                </div>

                <div className="buy-page custom-container">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 py-8">
                        <div>
                            <h2 className="heading-2 font-EvilEmpire text-white text-center lg:text-start pb-8">
                                CRYPTO THE REVOLUTION{" "}
                                <span className="green-text">DRD TOKEN</span>
                            </h2>

                            <p className="text text-white text-justify pb-8 w-full">
                                Participate in Our Only Public Sale before we
                                get listed on Exchanges and get Good
                                Appreciation Value. The Public sale is very much
                                Limited of only 0.5% of total Supply. You will
                                never get an Oppertunity to Acquire Dorado
                                Tokens at this Price .Very Limited Supply so
                                "Hurry UP" for an Oppertunity never to be Missed
                            </p>

                            <div>
                                <div className="pb-10 text text-center lg:text-start">
                                    <p className="font-semibold green-text">
                                        Total Token Supply: 11, 11, 11, 111
                                    </p>

                                    <p className="text green-text">
                                        Token For Website Sale: 55, 55, 555
                                    </p>

                                    <p className="text">
                                        Public Sale Price: TBA Before IDO
                                    </p>
                                </div>

                                <div className="token-sell-ends-count p-5 lg:px-10 lg:py-5 mb-10">
                                    <p className="text green-text pb-5 text-center">
                                        TOKEN SALE BEGINS
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
            </div>
        </>
    );
};

export default index;
