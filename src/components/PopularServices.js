import PSSlider from "./PSSlider"

const PopularServices = () => {

    return (
        <div className=" container">
            <div className=" relative z-10">
                <div className=" text-2xl tracking-wide absolute w-full -bottom-5 text-center">
                    <div className=" bg-white py-1 px-4 inline-block">Popular Services</div>
                </div>
            </div>
            <div className=" w-full rounded-2xl p-[0.15rem] bg-gradient-to-b from-primary to-primary/0">
                <div className=" bg-white rounded-xl pt-20">
                    <div className=" text-center">
                        <PSSlider />
                    </div>
                    <div className=" text-center w-[90%] md:w-[60%] m-auto mt-12">
                        <div className="">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error soluta rem odio! Pariatur saepe quibusdam perferendis laborum eligendi! Optio, quo. Culpa aliquid fugit dignissimos placeat error veniam fugiat ratione accusamus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, in enim. Nulla blanditiis vel ea voluptates, explicabo sapiente adipisci qui quis consectetur nobis quaerat beatae, fuga illo fugiat tempora odit.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularServices