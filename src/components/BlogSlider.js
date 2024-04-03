import { Swiper, SwiperSlide } from "swiper/react"
import Blog1 from "../assets/blog1.webp"
import Blog2 from "../assets/blog2.png"
import Blog3 from "../assets/blog3.jpg"
import Blog4 from "../assets/blog4.png"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import BlogItem from "./BlogItem"

const BlogSlider = () => {

    return (
        <Swiper
            effect="coverflow"
            centeredSlides
            loop
            autoplay={{
                delay: 3000,
                disableOnInteraction: false
            }}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 60,
                stretch: -100,
                depth: 300,
                modifier: 1,
                slideShadows: false,
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
                    slidesPerView: 2,
                    // spaceBetween: 50,
                },
                1280: {
                    slidesPerView: 3,
                    // spaceBetween: 50,
                },
            }}
            pagination={{
                clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="blog-swiper"
        >
            {
                blogs.map((item, index) => (
                    <SwiperSlide key={index}>
                        <BlogItem info={item} />
                    </SwiperSlide>
                ))
            }
        </Swiper>
    )
}

export default BlogSlider

const blogs = [
    { author: "Didi", img: Blog1, title: "The Title", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore libero eligendi consequatur vero autem delectus ullam eos voluptatum, fuga repellat, est aliquam ab assumenda iure culpa amet possimus ea!" },
    { author: "Didi", img: Blog2, title: "The Title", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore libero eligendi consequatur vero autem delectus ullam eos voluptatum, fuga repellat, est aliquam ab assumenda iure culpa amet possimus ea!" },
    { author: "Didi", img: Blog3, title: "The Title", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore libero eligendi consequatur vero autem delectus ullam eos voluptatum, fuga repellat, est aliquam ab assumenda iure culpa amet possimus ea!" },
    { author: "Didi", img: Blog4, title: "The Title", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore libero eligendi consequatur vero autem delectus ullam eos voluptatum, fuga repellat, est aliquam ab assumenda iure culpa amet possimus ea!" },
    { author: "Didi", img: Blog1, title: "The Title", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore libero eligendi consequatur vero autem delectus ullam eos voluptatum, fuga repellat, est aliquam ab assumenda iure culpa amet possimus ea!" },
    { author: "Didi", img: Blog2, title: "The Title", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore libero eligendi consequatur vero autem delectus ullam eos voluptatum, fuga repellat, est aliquam ab assumenda iure culpa amet possimus ea!" },
    { author: "Didi", img: Blog3, title: "The Title", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore libero eligendi consequatur vero autem delectus ullam eos voluptatum, fuga repellat, est aliquam ab assumenda iure culpa amet possimus ea!" },
    { author: "Didi", img: Blog4, title: "The Title", body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam tempore libero eligendi consequatur vero autem delectus ullam eos voluptatum, fuga repellat, est aliquam ab assumenda iure culpa amet possimus ea!" },
]