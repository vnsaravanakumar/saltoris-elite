import { useLocation, useHistory } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from 'assets/img/team-1-800x800.jpg';
import AuthService from "../services/auth.service";
import { Link } from 'react-router-dom';
import NavLink from '@material-tailwind/react/NavLink';
import { useAppContext } from 'services/app.context';

export default function AdminNavbar({ showSidebar, setShowSidebar, hideText }) {
    const location = useLocation().pathname;
    const currentUser = AuthService.getCurrentUser();
    const history = useHistory();

    const { appState, setAppState } = useAppContext();

    const toggleCustomize = () => {
        setAppState({...appState, customizeDashboard: !appState.customizeDashboard})
    }

    return (
        <nav className={`${hideText ? ` md:ml-20 `:` md:ml-64 `} py-0 px-0 m-0`}>
            <div className="container mx-auto flex items-center justify-between  md:pl-5">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    {/* <h4 className="uppercase text-sm tracking-wider mt-1">

                    </h4> */}
                    <div onClick={toggleCustomize}>
                        <Icon name="display_settings" color="blueGray" size="2xl" />
                    </div>
                    <div className="flex">
                        {/* <NavbarInput placeholder="Search" className="text-black" /> */}

                        <div className="-mr-4 ml-6">
                            <Dropdown
                                color="transparent"
                                buttonText={
                                    <div className="w-12">
                                        <Image src={ProfilePicture} rounded />
                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 0,
                                    color: 'transparent',
                                }}
                            >
                                <DropdownItem color="lightBlue">
                                    Action
                                </DropdownItem>
                                <DropdownItem color="lightBlue">
                                    Another Action
                                </DropdownItem>
                                <DropdownItem color="lightBlue">
                                    Something Else
                                </DropdownItem>
                            </Dropdown>
                        </div>
                        {currentUser && 
                        <Link href="/">
                            <NavLink ripple="dark" className="cursor-pointer" onClick={() => {AuthService.logout(); history.push("/");}} >
                                <div className="text-black items-center flex gap-1">
                                    <Icon name="logout" color="blueGray" size="2xl" />
                                    &nbsp;Logout
                                </div>
                            </NavLink>
                        </Link>
                            }
                            {/*<Link>
                                 <Button
                                    color="transparent"
                                    buttonType="link"
                                    size="lg"
                                    style={{ padding: 0 }}
                                >
                                    <Icon name="logout" size="2xl" />
                                    &nbsp;Logout
                                </Button> 
                                <NavLink ripple="dark" onClick={() => AuthService.logout()} >
                                    <div className="text-black items-center flex gap-1">
                                        <Icon name="logout" size="2xl" />
                                        &nbsp;Logout
                                    </div>
                                </NavLink>
                             </Link> */
                            }
                    </div>
                </div>
            </div>
        </nav>
    );
}
