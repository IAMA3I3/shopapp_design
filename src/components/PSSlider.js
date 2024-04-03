import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import PSItem from './PSItem';
import Ps1 from "../assets/ps1.jpg"
import Ps2 from "../assets/ps2.jpg"
import Ps3 from "../assets/ps3.jpg"
import Ps4 from "../assets/ps4.jpg"
import { Autoplay } from 'swiper/modules';

const PSSlider = () => {

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
                    slidesPerView: 2,
                    // spaceBetween: 20,
                },
                768: {
                    slidesPerView: 3,
                    // spaceBetween: 40,
                },
                1024: {
                    slidesPerView: 4,
                    // spaceBetween: 50,
                },
                1280: {
                    slidesPerView: 5,
                    // spaceBetween: 50,
                },
            }}
            modules={[Autoplay]}
        >
            <SwiperSlide>
                <PSItem img={Ps1} title={'Makeup'} />
            </SwiperSlide>
            <SwiperSlide>
                <PSItem img={Ps2} title={'Hairstyle'} />
            </SwiperSlide>
            <SwiperSlide>
                <PSItem img={Ps3} title={'Barbing'} />
            </SwiperSlide>
            <SwiperSlide>
                <PSItem img={Ps4} title={'Tailor'} />
            </SwiperSlide>

            <SwiperSlide>
                <PSItem img={Ps1} title={'Makeup'} />
            </SwiperSlide>
            <SwiperSlide>
                <PSItem img={Ps2} title={'Hairstyle'} />
            </SwiperSlide>
            <SwiperSlide>
                <PSItem img={Ps3} title={'Barbing'} />
            </SwiperSlide>
            <SwiperSlide>
                <PSItem img={Ps4} title={'Tailor'} />
            </SwiperSlide>
        </Swiper>
    )
}

export default PSSlider