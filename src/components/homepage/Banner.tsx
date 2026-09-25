import Image from "next/image";
import BannerImage from '@/assets/banner.png'
import BrowseButton from "./BrowseButton";
const Banner = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 bg-[#222630] my-5 sm:my-10 py-5 sm:py-10 sm:mx-3 md:mx-7 lg:mx-10 px-3 md:px-7 lg:px-10 rounded-2xl border-[1.4px] border-[#30353F]">
            <div className="space-y-3">
                <h3 className="text-[#C2F800] flex items-center justify-center  sm:block">WORKOUT LIBRARY</h3>
                <h1 className="text-[#FFFFFF] font-bold text-3xl sm:text-4xl text-center sm:text-left">TRAIN WITH INTENT. LOG <br className="hidden sm:block" />EVERY SET.</h1>
                <p className="text-center sm:text-left">FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br className="hidden sm:block" /> into today&apos;s plan, and watch the week&apos;s work add up.</p>
                <div className="flex items-center justify-center  sm:block">

                    {/* <button onClick={()=>document.getElementById('library')?.scrollIntoView()} className="bg-[#C2F800] font-semibold text-black rounded px-5 py-2 ">BROWSE WORKOUTS</button> */}
                    <BrowseButton></BrowseButton>
                </div>

            </div>
            <div className="flex items-center justify-center text-center pt-5 sm:pt-0">
                <Image src={BannerImage} alt='Banner' width={200} height={200}></Image>
            </div>
        </div>
    );
};

export default Banner;