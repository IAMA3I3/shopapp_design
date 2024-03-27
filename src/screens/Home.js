import AdBanner from "../components/AdBanner"
import PopularServices from "../components/PopularServices"
import Slider from "../components/Slider"

const Home = () => {

    return (
        <div className="">
            <Slider />
            <PopularServices />
            <AdBanner />
        </div>
    )
}

export default Home