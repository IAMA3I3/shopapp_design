const BlogItem = ({ info }) => {

    return (
        <div className=" w-full sm:w-[400px] h-[200px] rounded-lg overflow-hidden relative m-auto cursor-pointer my-8">
            <img src={info.img} className=" w-full h-full object-cover" alt="..." />
            <div className=" absolute top-0 left-0 h-full bg-gradient-to-r from-black/80 from-60% w-[60%] text-white p-4 flex items-center">
                <div className=" w-[80%]">
                    <div className=" text-xl tracking-wide uppercase font-semibold">{info.title}</div>
                    <div className=" text-sm font-semibold text-gray-400 mb-1">By {info.author}</div>
                    <div className=" line-clamp-4">{info.body}</div>
                </div>
            </div>
        </div>
    )
}

export default BlogItem