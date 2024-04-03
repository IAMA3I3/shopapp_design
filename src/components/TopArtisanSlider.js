import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Ta1 from "../assets/ta1.jpg"
import Ta2 from "../assets/ta2.jpg"
import Ta3 from "../assets/ta3.jpg"
import Ta4 from "../assets/ta4.jpg"
import Ta5 from "../assets/ta5.webp"
import TopArtisanItem from './TopArtisanItem';

const TopArtisanSlider = () => {

    return (
        <Swiper
            // spaceBetween={5}
            slidesPerView={"auto"}
            centeredSlides
            loop
            autoplay={{
                delay: 2000,
                disableOnInteraction: false
            }}
            breakpoints={{
                640: {
                    slidesPerView: 1,
                    // spaceBetween: 20,
                },
                768: {
                    slidesPerView: 2,
                    // spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 3,
                    // spaceBetween: 50,
                },
                1280: {
                    slidesPerView: 4,
                    // spaceBetween: 50,
                },
            }}
            modules={[Autoplay]}
        >
            {
                topArtisans.map((item, index) => (
                    <SwiperSlide key={index}>
                        <TopArtisanItem info={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default TopArtisanSlider



const topArtisans = [
    {name: "Tasha Owen", img: Ta1, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 49},
    {name: "Joy Babatunde", img: Ta2, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 78},
    {name: "Jamal Khaid", img: Ta3, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 59},
    {name: "Lilian Dave", img: Ta4, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 69},
    {name: "Josh Benet", img: Ta5, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 64},
    {name: "Tasha Owen", img: Ta1, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 49},
    {name: "Joy Babatunde", img: Ta2, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 78},
    {name: "Jamal Khaid", img: Ta3, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 59},
    {name: "Lilian Dave", img: Ta4, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 69},
    {name: "Josh Benet", img: Ta5, address: "Lorem ipsum dolor sit amet.", rating: 4, numRates: 64},
]