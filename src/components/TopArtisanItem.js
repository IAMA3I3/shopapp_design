import { FaStar } from "react-icons/fa6";

const TopArtisanItem = ({ info }) => {

    return (
        <div className=" w-[250px] rounded-2xl overflow-hidden bg-white shadow-md m-auto my-2">
            <div className=" w-full h-[250px]">
                <img src={info.img} className=" w-full h-full object-cover" alt="..." />
            </div>
            <div className=" p-4">
                <div className=" font-semibold text-gray-500 tracking-wide">{info.name}</div>
                <div className=" tracking-wide">{info.address}</div>
                <div className=" flex gap-6 items-baseline">
                    <div className=" flex gap-1 mt-2 items-center">
                        {
                            [...Array(info.rating)].map((e, index) => (
                                <div key={index} className=" text-yellow-500">
                                    <FaStar />
                                </div>
                            ))
                        }
                        {
                            [...Array(5 - info.rating)].map((e, index) => (
                                <div key={index} className=" text-gray-400">
                                    <FaStar />
                                </div>
                            ))
                        }
                    </div>
                    <div className=" font-semibold text-gray-500">({info.numRates})</div>
                </div>
            </div>
        </div>
    )
}

export default TopArtisanItem