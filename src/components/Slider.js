import { Fragment } from "react"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import 'swiper/css';
import 'swiper/css/effect-fade';
import ShowCase from "./ShowCase"
import Show1 from "../assets/show1.jpg"
import Show2 from "../assets/show2.jpg"
import Show3 from "../assets/show3.jpg"
import Show4 from "../assets/show4.webp"
import Show5 from "../assets/show5.jpg"
import Show6 from "../assets/show6.jpg"

const Slider = () => {

    return (
        <Swiper
            slidesPerView={1}
            loop={true}
            effect={'fade'}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            modules={[Autoplay, EffectFade]}
        >
            <SwiperSlide>
                <Fragment>
                    <ShowCase img={Show1} bgColor={' bg-blue-900/60'} />
                </Fragment>
            </SwiperSlide>
            <SwiperSlide>
                <Fragment>
                    <ShowCase img={Show2} bgColor={' bg-emerald-900/60'} />
                </Fragment>
            </SwiperSlide>
            <SwiperSlide>
                <Fragment>
                    <ShowCase img={Show3} bgColor={' bg-fuchsia-900/60'} />
                </Fragment>
            </SwiperSlide>
            <SwiperSlide>
                <Fragment>
                    <ShowCase img={Show4} bgColor={' bg-purple-900/60'} />
                </Fragment>
            </SwiperSlide>
            <SwiperSlide>
                <Fragment>
                    <ShowCase img={Show5} bgColor={' bg-lime-900/60'} />
                </Fragment>
            </SwiperSlide>
            <SwiperSlide>
                <Fragment>
                    <ShowCase img={Show6} bgColor={' bg-teal-900/60'} />
                </Fragment>
            </SwiperSlide>
        </Swiper>
    )
}

export default Slider