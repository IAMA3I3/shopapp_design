import TSlider from "./TSlider"

const Testimonies = () => {

    return (
        <div className=" py-12">
            <div className=" w-[95%] m-auto">
                <div className=" text-2xl tracking-wide text-center">What Our Users Say</div>
                <div className=" text-center -mt-2">
                    <div className=" inline-block w-10 bg-primary py-[1px]"></div>
                </div>
                <div className=" text-center">
                    <div className=" inline-block max-w-[600px]">We collect reviews from our users so you can get an honest opinion of what an experience with our artisan’s are really like!</div>
                </div>
                <div className=" mt-6 text-center">
                    <TSlider />
                </div>
            </div>
        </div>
    )
}

export default Testimonies