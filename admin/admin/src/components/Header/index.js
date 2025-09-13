
import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Divider,
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import {
  MdMenuOpen,
  MdOutlineMenu,
} from "react-icons/md";
import { FaShoppingCart, FaBell } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CiLight } from "react-icons/ci";
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import SearchBox from "./SearchBox";
import { MyContext } from '../../App';

const Header = () => {
  // State for dropdown menus
  const [cartAnchorEl, setCartAnchorEl] = useState(null);
  const [profileAnchorEl, setProfileAnchorEl] = useState(null);
  const [anchorNotif, setAnchorNotif] = useState(null);

  const openCart = Boolean(cartAnchorEl);
  const openProfile = Boolean(profileAnchorEl);

  const[isLogin, setIsLogin] = useState(false);

  const handleCartClick = (event) => setCartAnchorEl(event.currentTarget);
  const handleCartClose = () => setCartAnchorEl(null);

  const handleNotifOpen = (e) => setAnchorNotif(e.currentTarget);
  const handleNotifClose = () => setAnchorNotif(null);

  const handleProfileClick = (event) => setProfileAnchorEl(event.currentTarget);
  const handleProfileClose = () => setProfileAnchorEl(null);

  const context = useContext(MyContext);

  const notifications = [
    "📦 Order has been shipped",
    "👤 New user registered",
    "⚠️ Product XYZ is low in stock",
    <Button className="btn-blue w-100" key="viewAll">View all notifications</Button>
  ];

  return (
    <header className="d-flex align-items-center shadow-sm bg-white" style={{ height: "70px" }}>
      <div className="container-fluid w-100">
        <div className="d-flex justify-content-between align-items-center" style={{ height: "70px" }}>

          {/* Left: Logo */}
          <div className="d-flex align-items-center">
            <Link to='/' className="d-flex align-items-center text-decoration-none logo">
              <img
                src="https://mironcoder-hotash.netlify.app/images/logo.webp"
                alt="Dashboard Icon"
                className="me-2"
                style={{ width: 30 }}
              />
              <span className="ml-2 fw-bold text-dark">DashBoard</span>
            </Link>
          </div>

          {/* Center: Menu Icon + Search */}
          <div className="d-flex align-items-center gap-3">
            <Tooltip title="Menu">
              <Button
                className="rounded-circle d-flex align-items-center justify-content-center"
                onClick={() => context.setIsToggleSidebar(!context.isToggelSidebar)}
              >
                {context.isToggelSidebar === false ? <MdMenuOpen size={20} /> : <MdOutlineMenu size={20} />}
              </Button>
            </Tooltip>
            <SearchBox />
          </div>

          {/* Right: Icons + Avatar */}
          <div className="d-flex align-items-center gap-3">
            <Tooltip title="Light Mode">
              <Button className="rounded-circle d-flex align-items-center justify-content-center" onClick={()=>context.setThemeMode(!context.themeMode)}>
                <CiLight size={20} />
              </Button>
            </Tooltip>

            <Tooltip title="Language">
              <Button className="rounded-circle d-flex align-items-center justify-content-center">
                <TbWorld size={20} />
              </Button>
            </Tooltip>

            {/* Cart Menu */}
            <Tooltip title="Cart">
              <Button
                className="rounded-circle d-flex align-items-center justify-content-center"
                onClick={handleCartClick}
              >
                <FaShoppingCart size={20} />
              </Button>
            </Tooltip>
            <Menu
              anchorEl={cartAnchorEl}
              open={openCart}
              onClose={handleCartClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
              <MenuItem onClick={handleCartClose}>🛒 Your Cart is empty</MenuItem>
            </Menu>

            {/* Notifications */}
            <IconButton onClick={handleNotifOpen}>
              <FaBell className="bell" />
            </IconButton>
            <Menu
              anchorEl={anchorNotif}
              open={Boolean(anchorNotif)}
              onClose={handleNotifClose}
              PaperProps={{ sx: { width: 250 } }}
            >
              <Typography sx={{ px: 2, pt: 1, fontWeight: 'bold' }}>Notifications</Typography>
              {notifications.map((note, index) => (
                <MenuItem key={index} onClick={handleNotifClose}>
                  {note}
                </MenuItem>
              ))}
              {notifications.length === 0 && (
                <MenuItem onClick={handleNotifClose}>No notifications</MenuItem>
              )}
            </Menu>

            {
              isLogin!==true ? 
              <Link to="/Login" className="login-text">


                <Button className="btn-blue btn-lg">Sign In</Button>
              </Link>
              :
              ''
            }
            <div className="myAccWrapper">
              <Tooltip title="Account">
                <Button className="myAcc d-flex align-items-center" onClick={handleProfileClick}>
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img
                        src="https://mironcoder-hotash.netlify.app/images/avatar/01.webp"
                        alt="User"
                        style={{ width: 66, height: 36, borderRadius: "100%", marginRight: 1 }}
                      />
                    </span>
                  </div>
                  <div className="userInfo text-start">
                    <h3 className="mb-0 fw-bold">Kanishak Todwal</h3>
                    <p className="mb-0 text-muted">@Kanishak02</p>
                  </div>
                </Button>
              </Tooltip>

              <Menu
                anchorEl={profileAnchorEl}
                open={openProfile}
                onClose={handleProfileClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <MenuItem onClick={handleProfileClose}>
                  <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <Avatar /> My Account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleProfileClose}>
                  <ListItemIcon>
                    <PersonAdd fontSize="small" />
                  </ListItemIcon>
                  Add another account
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <ListItemIcon>
                    <Settings fontSize="small" />
                  </ListItemIcon>
                  Settings
                </MenuItem>
                <MenuItem onClick={handleProfileClose}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </div>

            

            {/* User Profile Menu */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
