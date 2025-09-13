import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaProductHunt } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CiLogout } from "react-icons/ci";
import { MyContext } from '../../App';

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        if (activeTab === index) {
            setIsToggleSubmenu(!isToggleSubmenu); // toggle if already open
        } else {
            setActiveTab(index);
            setIsToggleSubmenu(true);
        }
    };

    return (
        <>
            <div className='sidebar'>
                <ul>
                    {/* Dashboard */}
                    <li>
                        <Link to="/">
                            <Button
                                className={`w-100 ${activeTab === 0 && isToggleSubmenu === true ? 'active' : ''}`}
                                onClick={() => isOpenSubmenu(0)}
                            >
                                <span className="icon"><MdDashboard /></span>
                                Dashboard
                            </Button>
                        </Link>
                    </li>

                    {/* Products */}
                    <li>
                        <Button
                            className={`w-100 ${activeTab === 1 && isToggleSubmenu ? 'active' : ''}`}
                            onClick={() => isOpenSubmenu(1)}
                        >
                            <span className="icon"><FaProductHunt /></span>
                            Products
                            <span className={`arrow ${isToggleSubmenu && activeTab === 1 ? 'rotate' : ''}`}>
                                <FaAngleRight />
                            </span>
                        </Button>

                        <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="Product">Product List</Link></li>
                                <li><Link to="Product/Details">Product View</Link></li>
                                <li><Link to="ProductUpload">Product Upload</Link></li>
                            </ul>
                        </div>
                    </li>

                    {/* Category - Fixed index */}
                    <li>
                        <Button
                            className={`w-100 ${activeTab === 2 && isToggleSubmenu ? 'active' : ''}`}
                            onClick={() => isOpenSubmenu(2)}
                        >
                            <span className="icon"><FaProductHunt /></span>
                            Category
                            <span className={`arrow ${isToggleSubmenu && activeTab === 2 ? 'rotate' : ''}`}>
                                <FaAngleRight />
                            </span>
                        </Button>

                        <div className={`submenuWrapper ${activeTab === 2 && isToggleSubmenu ? 'colapse' : 'colapsed'}`}>
                            <ul className='submenu'>
                                <li><Link to="Category">Category List</Link></li>
                                <li><Link to="categoryAdd">Category Upload</Link></li>
                            </ul>
                        </div>
                    </li>

                    {/* Settings */}
                    <li>
                        <Link to="/">
                            <Button
                                className={`w-100 ${activeTab === 7 && isToggleSubmenu ? 'active' : ''}`}
                                onClick={() => isOpenSubmenu(7)}
                            >
                                <span className="icon"><IoMdSettings /></span>
                                Settings
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>

                <br />

                {/* Logout */}
                <div className='logoutWrapper'>
                    <div className='logoutBox'>
                        <Button variant="contained"><CiLogout />Logout</Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar;
