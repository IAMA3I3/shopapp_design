import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";

const TestimonyItem = ({ dp, text }) => {

    return (
        <div className=" cursor-pointer group inline-block">
            <div className=" flex gap-2 items-center">
                <div className=" w-[60px] h-[60px] rounded-full overflow-hidden">
                    <img src={dp} className=" w-full h-full object-cover" alt="..." />
                </div>
                <div className=" rounded-md border-2 border-primary w-[200px] p-2 group-hover:bg-primary/10">
                    <div><FaQuoteLeft /></div>
                    <div className=" line-clamp-3 text-sm font-semibold text-gray-600">{text}</div>
                    <div className=" flex justify-end"><FaQuoteRight /></div>
                </div>
            </div>
        </div>
    )
}

export default TestimonyItem