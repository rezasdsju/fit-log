'use client'
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logo from '@/assets/logo.png'
const Navbar = () => {
    const pathname = usePathname()
    const links = <>
        <li><Link className={pathname==='/'? 'text-[#C2F800]':''} href='/'>Workouts</Link></li>
        <li><Link className={pathname==='/my-plan'? 'text-[#C2F800]':''} href='/my-plan'>My Plan</Link></li>
    </>
    return (
        <nav className="sticky top-0 z-50">
            <div className="navbar bg-base-100 shadow-sm border-b border-[#30353F] sm:px-3 md:px-7 lg:px-10">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost sm:hidden">
                            <svg aria-label="Menu" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={-1}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    
                    <Link href='/' className="btn btn-ghost text-xl"><Image src={logo} alt="Logo" width={20} height={20}></Image><span >FITLOG</span></Link>
                </div>
                <div className="navbar-center hidden sm:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-2 sm:gap-4">
                    <p>Plan <span className="bg-[#C2F800] px-2 rounded-2xl text-black">0</span></p>
                    <p>Saved <span className="rounded-2xl px-2 border border-white bg-am">0</span></p>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;