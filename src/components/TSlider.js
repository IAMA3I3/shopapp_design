import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import Girl from "../assets/girl.webp"
import TestimonyItem from './TestimonyItem';

const TSlider = () => {

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
                testimonies.map((item, index) => (
                    <SwiperSlide key={index}>
                        <TestimonyItem dp={item.img} text={item.text} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default TSlider


const testimonies = [
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
    {img: Girl, text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nobis aliquam debitis tenetur soluta ad in quod atque incidunt obcaecati."},
]