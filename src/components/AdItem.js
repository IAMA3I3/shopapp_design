const AdItem = ({ img }) => {

    return (
        <div className=" w-full h-[100px] md:h-[200px] overflow-hidden rounded mb-8">
            <img src={img} className=" w-full h-full object-cover" alt="..." />
        </div>
    )
}

export default AdItem