"use client"
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [isDropdownOpen, setDropdownOpen] = useState(false);
    const [isSousDropdownOpen, setSousDropdownOpen] = useState(false);
    const [isSecondSousDropdownOpen, setSecondSousDropdownOpen] = useState(false);
    const [isMobailMenuOpen, setIsMobailMenuOpen] = useState(false);

    let currentLink = usePathname()
    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };
    const toggleSousDropdown = () => {
        setSousDropdownOpen(!isSousDropdownOpen)
    }
    const toggleSousDropdownM=()=>{
        setSecondSousDropdownOpen(!isSecondSousDropdownOpen)
    }
    const toggleMobailMenu = () =>{
        setIsMobailMenuOpen(!isMobailMenuOpen)
    } 
       
    return (

      
  <nav className="bg-white border-gray-200 shadow-md ">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href="/" className="flex items-center ">
                    <img src="/desert.png" width={120} className="aspect-[2/1]" alt="Logo" />
                </Link>
                <button onClick={toggleMobailMenu} data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`${isMobailMenuOpen ?'' : 'hidden' } w-full md:block md:w-auto` }id="navbar-dropdown">
                    <ul className="flex flex-col font-extrabold p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                        <li className="">
                            <Link href="/" className={`block py-2 pl-3 pr-4 ${ currentLink === "/"  ? 'text-primaryColor':'text-gray-700'}   rounded text-2xl md:bg-transparent  md:p-0 `} aria-current="page">Accueil</Link>
                        </li>
                        <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
                            <Link href='/CIRCUIT' >
                            <div
                                id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar"
                                className={` flex items-center justify-between w-full py-2 pl-3 pr-4 text-2xl ${ currentLink === "/CIRCUIT" ? 'text-primaryColor':'text-gray-700'}  rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto `}>
                                    Circuits 4x4
                                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg>
                            </div>
                                    </Link>
                            <div
                                id="dropdownNavbar"
                                className={`z-10 ${isDropdownOpen ? '' : 'opacity-0 translate-y-3 pointer-events-none'
                                    } absolute transition-all duration-200 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 `}
                            >
                                <ul className=" py-2 text-sm text-gray-700 " aria-labelledby="dropdownLargeButton">
                                    <li className="relative " onMouseEnter={toggleSousDropdown} onMouseLeave={toggleSousDropdown}>
                                        <Link href='/DEPARTOUARZAZATE'>
                                        <div id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" className={`flex  items-center justify-between w-full px-4 py-2 text-lg ${ currentLink === '/DEPARTOUARZAZATE' ? 'text-primaryColor':'text-gray-700'}  hover:bg-gray-100 `}>
                                            Départ Ouarzazate
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-2.5 h-2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>

                                        </div>
                                        </Link>


                                                <div
                                        id="doubleDropdown"
                                        className={`z-10 ${isSousDropdownOpen ? '' : 'opacity-0 translate-y-3 pointer-events-none'
                                            }  transition-all duration-200  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-1 left-[11rem] `}
                                             >

                                            <ul className="py-2 text-sm text-gray-700 " aria-labelledby="doubleDropdownButton">
                                                <li>
                                                    <Link href="/2-jours-1nuit" className={`block px-4 py-2 ${ currentLink === '/2-jours-1nuit' ? 'text-primaryColor':'text-gray-700'}  hover:bg-gray-100  `}>2jours/1nuit</Link>
                                                </li>
                                                <li>
                                                    <Link href="/3jours-2nuits" className={`block px-4 py-2 ${ currentLink === '/3-jours-2nuits' ? 'text-primaryColor':'text-gray-700'}  hover:bg-gray-100  `}>3jours/2nuit</Link>
                                                </li>
                                                <li>
                                                    <Link href="/4jours-3nuits" className={`block px-4 py-2 ${ currentLink === '/4-jours-3nuits' ? 'text-primaryColor':'text-gray-700'}  hover:bg-gray-100  `}>4jours/3nuit</Link>
                                                </li>

                                            </ul>

                                        </div>
                                    </li>
                                    <li onMouseEnter={toggleSousDropdownM} onMouseLeave={toggleSousDropdownM}>
                                        <Link href="/DepartMarakech" className={` px-4 py-2 flex  items-center justify-between ${ currentLink === '/DepartMarakech' ? 'text-primaryColor':'text-gray-700'}    hover:bg-gray-100 text-lg `}>
                                            Départ Marrakech
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-2.5 h-2.5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                            </svg>
                                        </Link>
                                        <div
                                        id="doubleDropdown"
                                        className={`z-10 ${isSecondSousDropdownOpen ? '' : 'opacity-0 translate-y-3 pointer-events-none'
                                            }  transition-all duration-200  bg-white divide-y divide-gray-100 rounded-lg shadow w-44 absolute top-14 left-[11rem] `}
                                             >

                                            <ul className="py-2 text-sm text-gray-700 " aria-labelledby="doubleDropdownButton">
                                                <li>
                                                    <Link href="/3-jours-2nuits" className={`block px-4 py-2 ${ currentLink === '/3-jours-2nuits' ? 'text-primaryColor':'text-gray-700'} hover:bg-gray-100  `}>3jours/2nuits</Link>
                                                </li>
                                                <li>
                                                    <Link href="/4jours-3nuits" className={`block px-4 py-2 ${ currentLink === '/4-jours-3nuits' ? 'text-primaryColor':'text-gray-700'} hover:bg-gray-100  `}>4jours/3nuits</Link>
                                                </li>
                                                <li>
                                                    <Link href="/4jours-3nuits" className={`block px-4 py-2 ${ currentLink === '/5-jours-4nuits' ? 'text-primaryColor':'text-gray-700'} hover:bg-gray-100  `}>5jours/4nuits</Link>
                                                </li>

                                            </ul>

                                        </div>
                                    </li>

                                </ul>

                            </div>
                        </li>
                        <li>
                            <Link href="/Excursions" className={`block py-2 pl-3 pr-4 ${ currentLink === '/Excursions' ? 'text-primaryColor':'text-gray-700'} text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 `}>Excursions</Link>
                        </li>
                        <li>
                            <Link href="/Meharee" className={`block py-2 pl-3 pr-4 ${ currentLink === '/Meharee' ? 'text-primaryColor':'text-gray-700'} text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 `}>Meharée</Link>
                        </li>
                        <li>
                            <Link href="/Hebergement" className={`block py-2 pl-3 pr-4 ${ currentLink === '/Hebergement' ? 'text-primaryColor':'text-gray-700'} text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 `}>Hébergement</Link>
                        </li>
                        <li>
                            <Link href="/Contact" className={`block py-2 pl-3 pr-4 ${ currentLink === '/Contact' ? 'text-primaryColor':'text-gray-700'} text-2xl rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 `}>Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>


    )
}

export default Navbar