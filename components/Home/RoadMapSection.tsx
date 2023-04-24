import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const RoadMapSection = () => {
    return (
        <div className="road-map-section" id="road-map-section">
            <div className="custom-container-y">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-12">
                    ROAD <span className="green-text">MAP</span>
                </h2>

                {/* For Web */}
                <div className="relative hidden lg:block">
                    <Swiper
                        slidesPerView={6}
                        spaceBetween={30}
                        centeredSlides={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper relative"
                    >
                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2022
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Project Ideation
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2022
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Research and <br /> Analysis
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        04 2022
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Project <br /> Development
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Token Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        White Paper <br /> Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Project Global <br /> Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Dorado (MTD) <br /> Token Website <br />
                                        Sale
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Dorado (MTD) <br /> Token on <br />
                                        DEX
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Dorado (MTD) <br /> Token on <br />
                                        CEX
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        03 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Dorado (MTD) <br /> Token Metaverse{" "}
                                        <br />
                                        Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        03 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        Dorado (MTD) <br /> Token Games <br />
                                        Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-20 xl:top-32 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        04 2023
                                    </h2>

                                    <p className="text-sm xl:text-xl text-white text-center">
                                        NFT Market <br /> Place Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className="absolute top-10 w-full">
                        <img
                            className="w-full"
                            src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-line.svg"
                            alt="image"
                        />
                    </div>
                </div>

                {/* For Mobile */}
                <div className="block md:hidden">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        centeredSlides={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper relative"
                    >
                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2022
                                    </h2>

                                    <p className="text text-white text-center">
                                        Project Ideation
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2022
                                    </h2>

                                    <p className="text text-white text-center">
                                        Research and <br /> Analysis
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        04 2022
                                    </h2>

                                    <p className="text text-white text-center">
                                        Project <br /> Development
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Token Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        White Paper <br /> Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Project Global <br /> Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token Website <br />
                                        Sale
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token on <br />
                                        DEX
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token on <br />
                                        CEX
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        03 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token Metaverse{" "}
                                        <br />
                                        Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        03 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token Games <br />
                                        Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        04 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        NFT Market <br /> Place Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                {/* For Tab */}
                <div className="hidden md:block lg:hidden">
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        centeredSlides={true}
                        modules={[Autoplay, Pagination]}
                        className="mySwiper relative"
                    >
                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2022
                                    </h2>

                                    <p className="text text-white text-center">
                                        Project Ideation
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2022
                                    </h2>

                                    <p className="text text-white text-center">
                                        Research and <br /> Analysis
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        04 2022
                                    </h2>

                                    <p className="text text-white text-center">
                                        Project <br /> Development
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Token Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        White Paper <br /> Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Project Global <br /> Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        01 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token Website <br />
                                        Sale
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token on <br />
                                        DEX
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        02 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token on <br />
                                        CEX
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        03 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token Metaverse{" "}
                                        <br />
                                        Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        03 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        Dorado (MTD) <br /> Token Games <br />
                                        Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="relative cursor-pointer">
                                <img
                                    className="w-full"
                                    src="https://moonlit-snickerdoodle-f90af8.netlify.app/images/road-map-card.svg"
                                    alt="image"
                                />

                                <div className="absolute left-0 right-0 top-44 bottom-0 h-fit m-auto">
                                    <h2 className="heading-3 text-white font-EvilEmpire text-center">
                                        04 2023
                                    </h2>

                                    <p className="text text-white text-center">
                                        NFT Market <br /> Place Launch
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default RoadMapSection;
