import AdBanner from "../components/AdBanner"
import Benefits from "../components/Benefits"
import Blog from "../components/Blog"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"
import PopularServices from "../components/PopularServices"
import Slider from "../components/Slider"
import Testimonies from "../components/Testimonies"
import TopArtisans from "../components/TopArtisans"

const Home = () => {

    return (
        <div className="">
            <Slider />
            <PopularServices />
            <AdBanner />
            <TopArtisans />
            <Benefits />
            <Testimonies />
            <Blog />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home