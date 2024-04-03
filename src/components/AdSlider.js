import { Swiper, SwiperSlide } from "swiper/react"
import AdItem from "./AdItem"
import Ad1 from "../assets/ad1.jpg"
import Ad2 from "../assets/ad2.webp"
import Ad3 from "../assets/ad3.webp"
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const AdSlider = () => {

    return (
        <Swiper
            slidesPerView={1}
            loop
            pagination={{
                clickable: true,
            }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            modules={[Autoplay, Pagination]}
        >
            <SwiperSlide>
                <AdItem img={Ad1} />
            </SwiperSlide>
            <SwiperSlide>
                <AdItem img={Ad2} />
            </SwiperSlide>
            <SwiperSlide>
                <AdItem img={Ad3} />
            </SwiperSlide>
        </Swiper>
    )
}

export default AdSlider