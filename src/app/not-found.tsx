

import Link from "next/link";
const NotFound = () => {
    return (
        <div className="mx-auto pt-20">
            <p className="text-center text-red-200 font-bold">404</p>
            <h1 className="text-3xl font-semibold text-red-400">Page not Found</h1>
            <div className="flex items-center justify-center pt-5">
                <Link href='/' ><span className="bg-[#C2D209] text-[#436789] px-3 py-2 rounded-2xl mt-3 text-center font-bold">Back to Home</span></Link>
            </div>
        </div> 
    );
};

export default NotFound;