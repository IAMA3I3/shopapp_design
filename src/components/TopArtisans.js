import TopArtisanSlider from "./TopArtisanSlider"

const TopArtisans = () => {

    return (
        <div className=" bg-gray-200 mt-10 py-12">
            <div className=" container">
                <div className=" text-2xl tracking-wide text-center">Top Rated Artisans</div>
                <div className=" text-center -mt-2">
                    <div className=" inline-block w-10 bg-primary py-[1px]"></div>
                </div>
                <div className=" w-full mt-6">
                    <TopArtisanSlider />
                </div>
            </div>
        </div>
    )
}

export default TopArtisans