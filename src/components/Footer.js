import { FaSquareFacebook, FaSquareInstagram, FaCcPaypal, FaCcVisa, FaCcMastercard, FaCcDiscover } from "react-icons/fa6";
import { SiAmericanexpress } from "react-icons/si";

const Footer = () => {

    return (
        <div className=" py-12 bg-slate-800 text-white/80">
            <div className=" w-[95%] m-auto">
                <div className=" flex justify-between gap-4 flex-wrap *:w-[250px]">

                    <div className="">
                        <div className=" text-nowrap text-primary font-semibold text-lg mb-2">Information</div>
                        <div className=" *:text-nowrap *:block *:my-1">
                            <a href="/">Stopshop360</a>
                            <a href="/">Career</a>
                            <a href="/">Reviews</a>
                            <a href="/">Blogs/News</a>
                            <a href="/">Partnership</a>
                            <a href="/">Privacy Policy</a>
                            <a href="/">Terms of Service</a>
                            <a href="/">Interllectual Property Claims</a>
                        </div>
                    </div>

                    <div className="">
                        <div className=" text-nowrap text-primary font-semibold text-lg mb-2">Categories</div>
                        <div className=" *:text-nowrap *:block *:my-1">
                            <a href="/">Hairstylist</a>
                            <a href="/">Barber</a>
                            <a href="/">Nail Technician</a>
                            <a href="/">Artist</a>
                            <a href="/">Fashion Designer</a>
                            <a href="/">Make-up Artist</a>
                        </div>
                    </div>

                    <div className="">
                        <div className=" text-nowrap text-primary font-semibold text-lg mb-2">More on Stopshop360</div>
                        <div className=" *:text-nowrap *:block *:my-1">
                            <a href="/">Stopshop360 Business</a>
                            <a href="/">Stopshop360 Learn</a>
                            <a href="/">Stopshop360 Tv Show</a>
                        </div>
                    </div>

                    <div className="">
                        <div className=" text-nowrap text-primary font-semibold text-lg mb-2">Address</div>
                        <div className=" *:my-1">
                            <div className="">Address: Flat 1-2 7 Market Pace, Saffron Walden, England, CB10 1HR</div>
                            <div className=" text-nowrap">Phone: (+44) 701 6801 103</div>
                            <div className=" text-nowrap">E-mail: info@stopshop360.com</div>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-wrap *:w-[300px] justify-between gap-4 mt-8">

                    <div className=" flex gap-4 items-center *:cursor-pointer text-2xl">
                        <div className=""><FaSquareFacebook /></div>
                        <div className=""><FaSquareInstagram /></div>
                    </div>

                    <div className=" flex items-center gap-4 *:cursor-pointer text-2xl">
                        <div className=""><FaCcPaypal /></div>
                        <div className=""><FaCcVisa /></div>
                        <div className=""><FaCcMastercard /></div>
                        <div className=""><FaCcDiscover /></div>
                        <div className=""><SiAmericanexpress /></div>
                    </div>

                    <div className="">
                        <div className="">Copyright &#169; {new Date().getFullYear()} Stopshop360 INC.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer