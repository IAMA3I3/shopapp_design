import Logo from "../assets/logo.png"
import { IoMail } from "react-icons/io5";

const Newsletter = () => {

    return (
        <div className=" py-12">
            <div className=" container">
                <div className=" grid grid-cols-1 md:grid-cols-3">
                    <div className=" flex justify-center mb-6 md:mb-0">
                        <div className=" w-[100px]">
                            <img src={Logo} className=" w-full" alt="..." />
                        </div>
                    </div>
                    <div className=" md:col-span-2">
                        <div className=" text-center md:text-left">
                            <div className=" text-lg tracking-wide">NEW TO STOPSHOP360?</div>
                            <div className=" text-sm font-semibold text-gray-500 mb-4"> Subscribe to our newsletter to get updates on our latest offers</div>
                            <form className=" flex flex-col md:flex-row flex-wrap items-center gap-2" action="">
                                <div className=" relative w-full md:w-auto">
                                    <input className=" pl-8 w-full md:w-[400px] px-4 py-2 focus:border-primary" type="email" name="" id="" placeholder="Enter E-mail Address" />
                                    <span className=" absolute left-2 top-[50%] -translate-y-[50%] text-lg text-gray-500"><IoMail /></span>
                                </div>
                                <button className=" bg-primary/80 text-white hover:bg-primary w-full md:w-auto">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter