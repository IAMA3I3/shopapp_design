import Bg from "../assets/blogbg.jpg"
import BlogSlider from "./BlogSlider"

const Blog = () => {

    return (
        <div className="bg-center bg-cover bg-fixed" style={{ backgroundImage: `url(${Bg})` }}>
            <div className=" py-12 bg-blue-900/90 text-white">
                <div className=" w-[90%] m-auto">
                    <div className=" text-2xl tracking-wide text-center">Blog Posts</div>
                    <div className=" mt-4">
                        <BlogSlider />
                    </div>
                    <div className=" text-center mt-2">
                        <button className=" border-2 border-white hover:bg-white/50">See More Blog</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog