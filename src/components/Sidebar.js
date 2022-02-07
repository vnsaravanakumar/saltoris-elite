import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from './AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import { Link } from 'react-router-dom';
import VeoliaLogo from 'assets/img/veolia-logo-transparent.png';

export default function Sidebar({hideText, setHideText}) {
    const [showSidebar, setShowSidebar] = useState('-left-64');
    

    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                hideText={hideText}
            />
            <div
                className={`h-screen fixed top-0 md:left-0 ${showSidebar} ${hideText ? `w-18`:`w-64`} overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-xl bg-white z-10 py-4 {${hideText ? ` px-2 `:` px-6 `} transition-all duration-300`}
            >
                
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    <div className={` top-2 font-bold  ${ !hideText && ` text-right `} cursor-pointer ml-2 right-6 z-50 transition-all duration-300`} onClick={()=>setHideText(!hideText)}>                          
                        {hideText ? ">>" : "<<"}
                    </div>
                    <a
                        
                        target="_blank"
                        rel="noreferrer"
                        className="mt-2 text-center w-full inline-block"
                    >
                        <Link to="/dashboard">
                            {/* <img
                                src={VeoliaLogo}
                                className="w-36 h-auto "
                            /> */}
                            <div className="ml-2">
                                <p className="text-2xl text-left">ELIT</p>
                                {!hideText && <div className="flex lowercase text-xs">powered by
                                    <img className="w-20" src="https://static.wixstatic.com/media/3780c2_8636388420094d4e9de71388d5a89363~mv2.png/v1/fill/w_260,h_80,al_c,q_85,usm_0.66_1.00_0.01/logo.webp" />
                                </div>}
                            </div>
                        </Link>
                    </a>
                    <div className="flex flex-col">
                        <hr className="my-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none">
                            <li className="rounded-lg mb-4">
                                <NavLink
                                    to="/orders"
                                    exact
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="dashboard" size="2xl" />
                                    {!hideText && "Orders"}
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2">
                                <NavLink
                                    to="/settings"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="settings" size="2xl" />
                                    {!hideText && "Invoices"}
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 ">
                                <NavLink
                                    to="/tables"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="toc" size="2xl" />
                                    {!hideText && "My Bids"}
                                </NavLink>
                            </li>
                            <li className="rounded-lg mb-2 text-gray-700">
                                <NavLink
                                    to="/maps"
                                    className="flex items-center gap-4 text-sm text-gray-700 font-light px-4 py-3 rounded-lg"
                                    activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                                >
                                    <Icon name="map" size="2xl" />
                                    {!hideText && "Trade Relationships"}
                                </NavLink>
                            </li>
                            {/* <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <NavLink to="/login" className="flex items-center gap-4 text-sm font-light py-3">
                                    <Icon name="fingerprint" size="2xl" />
                                    Login
                                </NavLink>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <NavLink to="/register" className="flex items-center gap-4 text-sm font-light py-3">
                                    <Icon name="list_alt" size="2xl" />
                                    Register
                                </NavLink>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <NavLink to="/" className="flex items-center gap-4 text-sm font-light py-3">
                                    <Icon name="web" size="2xl" />
                                    Landing Page
                                </NavLink>
                            </li>
                            <li className="px-4 rounded-lg mb-2 text-gray-700">
                                <NavLink to="/profile" className="flex items-center gap-4 text-sm font-light py-3">
                                    <Icon name="account_circle" size="2xl" />
                                    Profile Page
                                </NavLink>
                            </li> */}
                        </ul>
{/* 
                        <ul className="flex-col min-w-full flex list-none absolute bottom-0">
                            <li className="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 px-4 rounded-lg text-white mb-2">
                                <a
                                    href="https://material-tailwind.com/documentation/quick-start"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-4 text-sm font-light py-3"
                                >
                                    <Icon name="description" size="2xl" />
                                    Documentation
                                </a>
                            </li>
                            <li className="bg-gradient-to-tr from-purple-500 to-purple-700 px-4 rounded-lg text-white">
                                <a
                                    href="https://www.creative-tim.com/product/material-tailwind-dashboard-react"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center justify-center gap-4 text-sm font-light py-3"
                                >
                                    Free Download
                                </a>
                            </li>
                        </ul> */}
                    </div>
                </div>
            </div>
        </>
    );
}
