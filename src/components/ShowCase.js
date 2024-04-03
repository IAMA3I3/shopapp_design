import Curve from "../assets/curve.png"
import { IoSearch } from "react-icons/io5";

const ShowCase = ({ img, bgColor }) => {

    return (
        <div className=" relative h-[60vh] md:h-[95vh] w-screen bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${img})` }}>
            <div className={`${bgColor} w-full h-full flex flex-col justify-center items-center md:pb-40 text-white pb-0`}>
                <div className=" w-[90%] max-w-[600px]">
                    <div className=" text-2xl text-center tracking-wide">Stopshop360 is the easiest way to <span className=" text-primary font-semibold">GET</span> & <span className=" text-primary font-semibold">PROVIDE</span> perfect Fashion & Beauty Services at any location</div>
                    <form className=" w-full mt-4">
                        <div className=" w-[90%] md:w-[70%] m-auto bg-white/10 backdrop-blur rounded-md flex items-center">
                            <span className=" text-2xl p-2"><IoSearch /></span>
                            <input className=" border-none flex-1" type="text" name="" id="" placeholder="Search professionals" />
                        </div>
                    </form>
                </div>
                <div className=" hidden md:flex w-[80%] gap-2 flex-wrap items-center justify-center mt-6">
                    <div className=" text-nowrap">Popular:</div>
                    <div className=" text-nowrap border-2 rounded-full py-1 px-3">Fashion Designer</div>
                    <div className=" text-nowrap border-2 rounded-full py-1 px-3">Hairstylist</div>
                    <div className=" text-nowrap border-2 rounded-full py-1 px-3">Barber</div>
                    <div className=" text-nowrap border-2 rounded-full py-1 px-3">Make Up Artist</div>
                    <div className=" text-nowrap border-2 rounded-full py-1 px-3">Wig Vendor</div>
                    <div className=" text-nowrap border-2 rounded-full py-1 px-3">Pedicure / Manicure</div>
                    <div className=" text-nowrap border-2 rounded-full py-1 px-3">Photographer</div>
                </div>
            </div>
            <div className=" absolute -bottom-1 left-0 right-0 w-full">
                <img src={Curve} className=" w-full object-contain" alt="" />
            </div>
        </div>
    )
}

export default ShowCase