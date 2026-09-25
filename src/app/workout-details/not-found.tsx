import Link from "next/link";
const NotFoundDetail = () => {
    return (
        <div className="text-center pt-10">
            <h1 className="text-[#FFFFFF] text-2xl font-semibold">Workout Not Found</h1>
            <p className="text-[#9CA3AF]">Sorry this workout does not exists</p>
            <div className="flex items-center justify-center pt-5">
                <Link href='/' ><span className="bg-[#C2D209] text-[#436789] px-3 py-2 rounded-2xl mt-3 text-center font-bold">Back to Home</span></Link>
            </div>
        </div>
    );
};

export default NotFoundDetail;