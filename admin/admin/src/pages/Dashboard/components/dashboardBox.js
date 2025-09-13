import { HiDotsVertical } from "react-icons/hi";
import React from "react";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const DashboardBox = (props) => {

  const options = [
    
    'Last Day',
    'Last Week',
    'Last Month',
    'Last Year',

  ];

  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div
      className="dashboardBox"
      style={{
        backgroundImage: `linear-gradient(to right, ${props.color?.[0] || "#000"}, ${props.color?.[1] || "#333"})`,
      }}
    >
      <div className="d-flex w-100">
        <div className="col1">
          <h4 className="text-white mb-0 ">Total Users</h4>
          <span className="text-white">277</span>
        </div>

        <div className="ml-auto">
          {props.icon ?
            <span className="icon">
              {props ? props.icon : ''}
            </span>
            :
            ' '
          }
        </div>
      </div>

      {props.grow === true ?
        <span className="chart"><TrendingUpIcon /></span>
        :
        <span className="chart"><TrendingDownIcon /></span>
      }

      <div className="d-flex align-item-center">
        <h6 className="text-white mb-0 mt-0">Last Month</h6>
        <span
          className="ml-auto toggleIcon"
          onClick={handleClick} // Added click handler for menu
          style={{ cursor: "pointer" }} // Makes it look clickable
        >
          <HiDotsVertical />
        </span>

        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: '20ch',
            },
          }}
        >
          {options.map((option) => (
            <MenuItem
              key={option}
              selected={option === 'Pyxis'}
              onClick={handleClose}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    </div>
    
  );
};

export default DashboardBox;
