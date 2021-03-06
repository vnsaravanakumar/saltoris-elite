import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@material-tailwind/react/Navbar';
import NavbarContainer from '@material-tailwind/react/NavbarContainer';
import NavbarWrapper from '@material-tailwind/react/NavbarWrapper';
import NavbarBrand from '@material-tailwind/react/NavbarBrand';
import NavbarToggler from '@material-tailwind/react/NavbarToggler';
import NavbarCollapse from '@material-tailwind/react/NavbarCollapse';
import Nav from '@material-tailwind/react/Nav';
import NavLink from '@material-tailwind/react/NavLink';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import Icon from '@material-tailwind/react/Icon';
import Button from '@material-tailwind/react/Button';
import VeoliaLogo from 'assets/img/veolia-logo-transparent.png';
import Image from '@material-tailwind/react/Image';
import AuthService from "../services/auth.service";

export default function DefaultNavbar() {
    const [openNavbar, setOpenNavbar] = useState(false);
    const currentUser = AuthService.getCurrentUser();

    return (<>                            
        <Navbar color="transparent" navbar className="bg-black/40">
            <NavbarContainer>
                {/* <NavbarWrapper>
                    <Link to="/">
                            <img
                                src={VeoliaLogo}
                                className="w-36 lg:w-48 h-auto "
                            />
                        
                    </Link>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper> */}
                <NavbarWrapper>
                    <Link to="/">
                        <NavbarBrand>
                            <div className="ml-4">
                                <p className="text-2xl">ELIT</p>
                                <div className="flex lowercase text-xs">powered by
                                    <img className="w-20" src="https://static.wixstatic.com/media/3780c2_8636388420094d4e9de71388d5a89363~mv2.png/v1/fill/w_260,h_80,al_c,q_85,usm_0.66_1.00_0.01/logo.webp" />
                                </div>
                            </div>
                        </NavbarBrand>
                    </Link>
                    <NavbarToggler
                        onClick={() => setOpenNavbar(!openNavbar)}
                        color="white"
                    />
                </NavbarWrapper>
                <NavbarCollapse open={openNavbar}>
                    <Nav>
                        <div className="flex flex-col z-50 lg:flex-row lg:items-center">
                            {currentUser && 
                            <Link to="/dashboard">
                                <NavLink ripple="light">
                                    <Icon name="dashboard" size="2xl" />
                                    &nbsp;Dashboard
                                </NavLink>
                            </Link>}
                            {!currentUser && (<>
                            <Link to="/buyer-login">
                                <NavLink ripple="light">
                                    <Icon name="shopping_bag" size="2xl" />
                                    &nbsp;Buyer
                                </NavLink>
                            </Link>
                            <Link to="/supplier-login">
                                <NavLink ripple="light">
                                    <Icon name="warehouse" size="2xl" />
                                    &nbsp;Supplier
                                </NavLink>
                            </Link></>)}
                            {currentUser && 
                            <Link>
                                <NavLink ripple="light" onClick={() => AuthService.logout()}>
                                    <Icon name="logout" size="2xl" />
                                    &nbsp;Logout
                                </NavLink>
                            </Link>}
                            {/* <NavLink
                                href="https://material-tailwind.com/components?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon name="apps" size="2xl" />
                                &nbsp;Components
                            </NavLink> */}
                            {/* <div className="text-white">
                                <Dropdown
                                    color="transparent"
                                    size="sm"
                                    buttonType="link"
                                    buttonText={
                                        <div className="py-2.5 font-medium flex items-center">
                                            <Icon
                                                name="view_carousel"
                                                size="2xl"
                                                color="white"
                                            />
                                            <span className="ml-2">
                                                Pages
                                            </span>
                                        </div>
                                    }
                                    ripple="light"
                                >
                                    <Link to="/">
                                        <DropdownItem color="lightBlue">
                                            Landing
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/profile">
                                        <DropdownItem color="lightBlue">
                                            Profile
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/login">
                                        <DropdownItem color="lightBlue">
                                            Login
                                        </DropdownItem>
                                    </Link>
                                    <Link to="/register">
                                        <DropdownItem color="lightBlue">
                                            Register
                                        </DropdownItem>
                                    </Link>
                                </Dropdown>
                            </div> */}
                            {/* <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                <Icon
                                    family="font-awesome"
                                    name="fab fa-github"
                                    size="xl"
                                />
                                &nbsp;Github
                            </NavLink>
                            <NavLink
                                href="https://github.com/creativetimofficial/material-tailwind/issues?ref=mtk"
                                target="_blank"
                                rel="noreferrer"
                                ripple="light"
                            >
                                Issues
                            </NavLink>
                            <a
                                href="https://www.creative-tim.com/product/material-tailwind-kit-react"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Button
                                    color="transparent"
                                    className="bg-white text-black ml-4"
                                    ripple="dark"
                                >
                                    Free Download
                                </Button>
                            </a> */}
                        </div>
                    </Nav>
                </NavbarCollapse>

            </NavbarContainer>
        </Navbar></>
    );
}
