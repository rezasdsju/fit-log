import Image from "next/image";
import FooterLogo from '@/assets/logo.png'
const Footer = () => {
    return (
        <div className='grid grid-cols-2 bg-[#090A0D] py-6 mt-5 sm:mt-10 items-center border-t border-[#404750]'>
            <div className='flex gap-2 px-5 sm:px-7 md:px-10'>
                <Image src={FooterLogo} alt='Footer Logo' width={20} height={10} className="rotate-125"></Image>
                <h2 className='text-[#FFFFFF] text-xl pl-2'>FITLOG</h2>
            </div>
            <div className="flex sm:justify-end pr-4 sm:pr-7 md:pr-10">
                <p className='text-[#6B7280]'>© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </div>
    );
};

export default Footer;