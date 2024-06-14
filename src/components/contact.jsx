import FooterContent from "./footerContent";
import NavBarLogout from "./navBarLogout";

const Contact = () => {
    return (
        <div>
            <NavBarLogout />
            <div className="w-full m-0 p-0 h-[110vh] bg-gray-200 flex justify-center">
                <div className="md:flex w-[100%] m-32 text-gray-800">
                    <div className="p-20 md:w-[50%] bg-white rounded-l-lg">
                        <div className="font-bold text-[36px] h-[25%]">
                            Contact us
                        </div>
                        <div className="flex justify-center items-center">
                            <div className="w-[80%] flex flex-col items-center shadow-xl my-5 py-24">
                                <div>
                                    <img src="https://thumbs.dreamstime.com/b/costumer-support-emoticon-costumer-support-emoticon-headset-134623914.jpg" alt="Talk" className="rounded-full h-16 w-16" />
                                </div>
                                <div className="hidden md:block font-bold text-[24px]">Talk to a member of our </div>
                                <div className="hidden md:block font-bold text-[24px]"> sales team.</div>

                                <div className="hidden md:block font-bold text-[14px] pt-4">We're help you find the right product and  </div>
                                <div className="hidden md:block font-bold text-[14px]"> pricing for your business.</div>
                                <div className="btn bg-gray-800 w-[40%] flex justify-center text-white rounded-lg px-4 py-3 mt-10 font-bold cursor-pointer">Contact Sales</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center md:w-[50%] bg-yellow-400 rounded-r-lg" style={{ backgroundImage: "url('https://img.freepik.com/free-photo/business-concept-with-graphic-holography_23-2149160929.jpg?t=st=1718293707~exp=1718297307~hmac=6ec04111ce4db79c238dd0fd8f386b398dadd285c680bd8b0658beef35a351e0&w=1380')" }}>

                    </div>
                </div>
            </div>
            <FooterContent />
        </div>
    );
};

export default Contact;