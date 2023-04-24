const ContactSection = () => {
    return (
        <div className="contact-section" id="contact-section">
            <div className="custom-container">
                <h2 className="heading-2 font-EvilEmpire text-center text-white pb-8">
                    CONTACT <span className="green-text">US</span>
                </h2>

                {/* <p className="text text-white text-justify md:text-center pb-12 w-full lg:w-[50%] mx-auto">
                    Meta Dorados is a collection of 10,000 unique ERC-721 tokens
                    stored on the Ethereum Blockchain
                </p> */}

                <div className="px-0 lg:px-44">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-2">
                        <input
                            type="text"
                            id="name"
                            className="bg-transparent border input-border text-white text-sm rounded-lg focus:ring-[#27e124] focus:border-[#27e124] block w-full p-2.5 mb-2 py-3 placeholder-gray-300"
                            placeholder="Name"
                            required
                        />

                        <input
                            type="email"
                            id="email"
                            className="bg-transparent border input-border text-white text-sm rounded-lg focus:ring-[#27e124] focus:border-[#27e124] block w-full p-2.5 mb-2 py-3 placeholder-gray-300"
                            placeholder="E-mail"
                            required
                        />

                        <input
                            type="text"
                            id="phone"
                            className="bg-transparent border input-border text-white text-sm rounded-lg focus:ring-[#27e124] focus:border-[#27e124] block w-full p-2.5 mb-2 py-3 placeholder-gray-300"
                            placeholder="Phone"
                            required
                        />

                        <input
                            type="text"
                            id="address"
                            className="bg-transparent border input-border text-white text-sm rounded-lg focus:ring-[#27e124] focus:border-[#27e124] block w-full p-2.5 mb-2 py-3 placeholder-gray-300"
                            placeholder="Address"
                            required
                        />
                    </div>

                    <textarea
                        className="bg-transparent border input-border text-white text-sm rounded-lg focus:ring-[#27e124] focus:border-[#27e124] block w-full p-2.5 mb-4 py-3 placeholder-gray-300"
                        id="comment"
                        cols={30}
                        rows={10}
                        placeholder="Write a comment from here"
                    ></textarea>

                    <button
                        type="submit"
                        className="input-border text-white hover:text-black hover:bg-[#27e124] focus:ring-4 focus:outline-none focus:ring-[#27e124] font-medium rounded-lg text-sm w-full md:w-1/5 px-5 py-3 text-center"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
