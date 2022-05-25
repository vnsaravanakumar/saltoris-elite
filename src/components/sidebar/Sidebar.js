import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import AdminNavbar from 'components/AdminNavbar';
import Icon from '@material-tailwind/react/Icon';
import H6 from '@material-tailwind/react/Heading6';
import { Link } from 'react-router-dom';
import SaltorisLogo from 'assets/img/SaltorisLogo.svg';
import DixonLogo from 'assets/img/dixon_logo.jpg';
import { ReactComponent as BidsIcon } from './img/bids.svg';
import { ReactComponent as DashboardIcon } from './img/dashboard.svg';
import { ReactComponent as InvoicesIcon } from './img/invoices.svg';
import { ReactComponent as OpportunitiesIcon } from './img/opportunities.svg';
import { ReactComponent as OrdersIcon } from './img/orders.svg';
import { ReactComponent as QualityIcon } from './img/quality.svg';
import { ReactComponent as RelationshipsIcon } from './img/relationships.svg';
import SaltorisIcon from 'components/icon/Icon';
import { useLocation } from 'react-router-dom';

export default function Sidebar({hideText, setHideText}) {
    const [showSidebar, setShowSidebar] = useState();
    const location = useLocation();
    const getTextColor = (pathName) => window.location.pathname.endsWith(pathName) ? "white" : "gray";
    const SideLink = ({name, icon, displayName, hideText}) => {
        return (
            <NavLink
                to={"/"+name}
                exact
                className="flex items-center gap-4 text-sm  font-light px-4 py-2 rounded-full"
                //activeClassName="bg-gradient-to-tr from-light-blue-500 to-light-blue-700 text-white shadow-md"
                activeClassName="bg-primary-blue text-white shadow-md"
            >
                <SaltorisIcon fill={getTextColor(name)} IconSrc={icon} />
                {!hideText && displayName}
            </NavLink>
        )
    }

    // const menuOptions = [
    //     {name:"dashboard", icon:DashboardIcon, displayName:"Dashboard"},
    //     {name:"orders", icon:OrdersIcon, displayName:"Orders"},
    //     {name:"invoices", icon:InvoicesIcon, displayName:"Invoices"},
    //     {name:"my-bids", icon:BidsIcon, displayName:"My Bids"},
    //     {name:"opportunities", icon:OpportunitiesIcon, displayName:"Opportunities"},
    //     {name:"trade-relationships", icon:RelationshipsIcon, displayName:"TradeRelationships"},
    //     {name:"quality", icon:QualityIcon, displayName:"Quality"}
    // ]
    const menuOptions = [
        {name:"overview", icon:DashboardIcon, displayName:"Overview"},
        {name:"purchaseOrders", icon:OrdersIcon, displayName:"Purchase Orders"},
        {name:"invoices", icon:InvoicesIcon, displayName:"Invoices"},
        {name:"customerLedger", icon:BidsIcon, displayName:"Customer Ledger"}
    ]
    return (
        <>
            <AdminNavbar
                showSidebar={showSidebar}
                setShowSidebar={setShowSidebar}
                hideText={hideText}
            />
            <div
                className={`h-screen border-r border-gray-300 pt-0 fixed top-0 md:left-0 ${showSidebar} ${hideText ? `w-18`:`w-64`} overflow-y-auto flex-row flex-nowrap overflow-hidden bg-white z-10 pt-2 {${hideText ? ` px-2 `:` px-6 `} transition-all duration-300`}
            >
                
                <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
                    {/* <div className={` top-2 font-bold  ${ !hideText && ` text-right `} cursor-pointer ml-2 right-6 z-50 transition-all duration-300`} onClick={()=>{
                        setHideText(!hideText); 
                        setTimeout(()=>{
                            console.log("resized");
                            window.dispatchEvent(new Event('resize'),0)
                        });
                        }}>                          
                        {hideText ? ">>" : "<<"}
                    </div> */}
                    <a
                        
                        target="_blank"
                        rel="noreferrer"
                        className="text-center w-full inline-block"
                    >
                        <Link to="/dashboard">
                            {/* <img
                                src={VeoliaLogo}
                                className="w-36 h-auto "
                            /> */}
                            <div >
                                {/* <p className="text-2xl text-left">ELIT</p>
                                {!hideText && <div className="flex lowercase text-xs">powered by
                                    <img className="w-20" src={SaltorisLogo} />
                                </div>} */}
                                {/* <div className="flex lowercase "> */}
                                    <img src={DixonLogo} className="h-10"/>
                                {/* </div> */}
                            </div>
                        </Link>
                    </a>
                    <div className="flex flex-col">
                        <hr className="mb-4 min-w-full" />

                        <ul className="flex-col min-w-full flex list-none text-black">
                            {menuOptions.map(items =>
                                <li className="rounded-xl mb-4">
                                    <SideLink {...items} hideText={hideText} />
                                </li>
                            )}
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
