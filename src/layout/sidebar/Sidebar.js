import "./sidebar.scss";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleDrawerClose } from "../../reducer/NavSidebarSlice";
import IconButton from "@mui/material/IconButton";
import IconSidebarToggle from "../../images/SvgIcons/sidebar_toggle.svg";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { GoPrimitiveDot } from "react-icons/go";
import { FiSettings } from "react-icons/fi";
import { HiDocumentReport } from "react-icons/hi";
import { RiDashboardLine } from "react-icons/ri";
import { FaUserMd } from "react-icons/fa";
import { HiUsers } from "react-icons/hi";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const Sidebar = () => {
  const open = useSelector((state) => state.NavSidebar.open);
  const dispatch = useDispatch();

  const [expand, setExpand] = useState(
    JSON.parse(sessionStorage.getItem("clicked")) || false
  );
  const [expand1, setExpand1] = useState(
    JSON.parse(sessionStorage.getItem("clicked1")) || false
  );
  const [expand2, setExpand2] = useState(
    JSON.parse(sessionStorage.getItem("clicked2")) || false
  );

  // Expand
  function clicked() {
    if (expand !== true) {
      sessionStorage.setItem("clicked", JSON.stringify(true));
      sessionStorage.setItem("clicked1", JSON.stringify(false));
      sessionStorage.setItem("clicked2", JSON.stringify(false));
      setExpand(true);
      setExpand1(false);
      setExpand2(false);
    } else {
      setExpand(false);
      sessionStorage.setItem("clicked", JSON.stringify(false));
    }
  }

  // Expand1
  function clicked1() {
    if (expand1 !== true) {
      sessionStorage.setItem("clicked1", JSON.stringify(true));
      sessionStorage.setItem("clicked", JSON.stringify(false));
      sessionStorage.setItem("clicked2", JSON.stringify(false));
      setExpand1(true);
      setExpand(false);
      setExpand2(false);
    } else {
      setExpand1(false);
      sessionStorage.setItem("clicked1", JSON.stringify(false));
    }
  }

  // Expand2
  function clicked2() {
    if (expand2 !== true) {
      sessionStorage.setItem("clicked2", JSON.stringify(true));
      sessionStorage.setItem("clicked", JSON.stringify(false));
      sessionStorage.setItem("clicked1", JSON.stringify(false));
      setExpand2(true);
      setExpand(false);
      setExpand1(false);
    } else {
      setExpand2(false);
      sessionStorage.setItem("clicked2", JSON.stringify(false));
    }
  }

  return (
    <Drawer className="sidebar" variant="permanent" open={open}>
      <DrawerHeader>
        <h3 style={{ color: "white", marginRight: "35px" }}>Template 2</h3>
        <IconButton
          onClick={() => {
            dispatch(handleDrawerClose());
          }}
        >
          <img src={IconSidebarToggle} alt="Toggle" />
        </IconButton>
      </DrawerHeader>

      <List
        className="sidebar"
        sx={{ width: "100%", mt: 3, maxWidth: 360, bgcolor: "#1e1e2d" }}
      >
        <NavLink to="/">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <RiDashboardLine className="icon" />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>
        </NavLink>

        <ListItemButton onClick={clicked1} className="select-container">
          <ListItemIcon>
            <FaUserMd className="icon" />
          </ListItemIcon>
          <ListItemText primary="Doctor" sx={{ color: "white" }} />
          {!expand1 ? (
            <NavigateNextIcon className="arrow" />
          ) : (
            <ExpandMore className="arrow" />
          )}
        </ListItemButton>
        <Collapse in={expand1} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="dropdown-container">
            <NavLink to="/advice">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Doctors Information" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton onClick={clicked} className="select-container">
          <ListItemIcon>
            <FiSettings className="icon" />
          </ListItemIcon>
          <ListItemText primary="Setup" sx={{ color: "white" }} />
          {!expand ? (
            <NavigateNextIcon className="arrow" />
          ) : (
            <ExpandMore className="arrow" />
          )}
        </ListItemButton>
        <Collapse in={expand} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="dropdown-container">
            <NavLink to="/inbox">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Complaint" sx={{ fontSize: "12px" }} />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/advice">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Examination" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/advice">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Diagnosis" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/inbox">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Investigation" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/inbox">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Advice" />
                </ListItemButton>
              </ListItem>
            </NavLink>
            <NavLink to="/inbox">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Medicine" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        <ListItemButton onClick={clicked2} className="select-container">
          <ListItemIcon>
            <HiDocumentReport className="icon" />
          </ListItemIcon>
          <ListItemText primary="Report" sx={{ color: "white" }} />
          {!expand2 ? (
            <NavigateNextIcon className="arrow" />
          ) : (
            <ExpandMore className="arrow" />
          )}
        </ListItemButton>
        <Collapse in={expand2} timeout="auto" unmountOnExit>
          <List component="div" disablePadding className="dropdown-container">
            <NavLink to="/advice">
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <GoPrimitiveDot className="drop-icon" />
                  </ListItemIcon>
                  <ListItemText primary="Patient Report" />
                </ListItemButton>
              </ListItem>
            </NavLink>
          </List>
        </Collapse>

        <NavLink to="/advice">
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <HiUsers className="icon" />
              </ListItemIcon>
              <ListItemText primary="User" />
            </ListItemButton>
          </ListItem>
        </NavLink>
      </List>
    </Drawer>
  );
};

export default Sidebar;
