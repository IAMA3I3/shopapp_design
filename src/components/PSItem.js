const PSItem = ({ img, title }) => {

    return (
        <div className=" inline-block ml-4">
            <div className=" w-[200px] h-[200px] rounded-lg overflow-hidden">
                <img src={img} className=" w-full h-full object-cover" alt="" />
            </div>
            <div className=" text-center text-gray-500 font-semibold mt-2">{title}</div>
        </div>
    )
}

export default PSItem