import { TbReportMoney } from "react-icons/tb";
import { MdWorkspacePremium, MdOutlineLocalOffer, MdOutlineSupportAgent } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";

const Benefits = () => {

    return (
        <div className=" bg-primary/70 text-white py-12">
            <div className=" w-[95%] m-auto">
                <div className=" text-center text-2xl tracking-wide">Discover Stopshop360 benefits</div>
                <div className=" flex flex-wrap gap-4 *:w-[250px] justify-center mt-6">

                    <div className=" text-center">
                        <div className=" w-[60px] h-[60px] flex m-auto items-center justify-center border border-white rounded-md text-2xl">
                            <TbReportMoney />
                        </div>
                        <div className=" capitalize font-semibold tracking-wide mt-2 mb-4">Stay within your budget</div>
                        <div className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, minus tempora corporis veniam saepe nisi reiciendis molestiae dolor quidem exercitationem placeat, voluptatibus vitae praesentium quis commodi aliquid, totam rerum!</div>
                    </div>

                    <div className=" text-center">
                        <div className=" w-[60px] h-[60px] flex m-auto items-center justify-center border border-white rounded-md text-2xl">
                            <MdWorkspacePremium />
                        </div>
                        <div className=" capitalize font-semibold tracking-wide mt-2 mb-4">Swift, Quality Work</div>
                        <div className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, minus tempora corporis veniam saepe nisi reiciendis molestiae dolor quidem exercitationem placeat, voluptatibus vitae praesentium quis commodi aliquid, totam rerum!</div>
                    </div>

                    <div className=" text-center">
                        <div className=" w-[60px] h-[60px] flex m-auto items-center justify-center border border-white rounded-md text-2xl">
                            <MdOutlineLocalOffer />
                        </div>
                        <div className=" capitalize font-semibold tracking-wide mt-2 mb-4">Best Offers</div>
                        <div className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, minus tempora corporis veniam saepe nisi reiciendis molestiae dolor quidem exercitationem placeat, voluptatibus vitae praesentium quis commodi aliquid, totam rerum!</div>
                    </div>

                    <div className=" text-center">
                        <div className=" w-[60px] h-[60px] flex m-auto items-center justify-center border border-white rounded-md text-2xl">
                            <RiSecurePaymentLine />
                        </div>
                        <div className=" capitalize font-semibold tracking-wide mt-2 mb-4">Secure Payment</div>
                        <div className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, minus tempora corporis veniam saepe nisi reiciendis molestiae dolor quidem exercitationem placeat, voluptatibus vitae praesentium quis commodi aliquid, totam rerum!</div>
                    </div>

                    <div className=" text-center">
                        <div className=" w-[60px] h-[60px] flex m-auto items-center justify-center border border-white rounded-md text-2xl">
                            <MdOutlineSupportAgent />
                        </div>
                        <div className=" capitalize font-semibold tracking-wide mt-2 mb-4">Around-the-Clock Support</div>
                        <div className=" text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, minus tempora corporis veniam saepe nisi reiciendis molestiae dolor quidem exercitationem placeat, voluptatibus vitae praesentium quis commodi aliquid, totam rerum!</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Benefits