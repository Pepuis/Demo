import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import InventorySharpIcon from '@mui/icons-material/InventorySharp';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsSharpIcon from '@mui/icons-material/QueryStatsSharp';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SettingsSystemDaydreamOutlinedIcon from '@mui/icons-material/SettingsSystemDaydreamOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsIcon from '@mui/icons-material/Settings';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { Link } from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className='sidebar'>
            <div className="top">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span className="logo">admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/Users" style={{ textDecoration: "none" }}>
                        <li>
                            <AccountCircleOutlinedIcon className="icon" />
                            <span>Users</span>
                        </li>
                    </Link>
                    <Link to="/Products" style={{ textDecoration: "none" }}>
                        <li>
                            <InventorySharpIcon className="icon" />
                            <span>Products</span>
                        </li>
                    </Link>
                    <li>
                        <BorderColorIcon className="icon" />
                        <span>Order</span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li>
                    <p className="title">USEFUL</p>
                    <li>
                        <QueryStatsSharpIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <span>Notifications</span>
                    </li>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountBoxOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <li>
                        <LogoutOutlinedIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption" 
                onClick={() => dispatch({type: "LIGHT" })}></div>
                <div className="colorOption" 
                onClick={() => dispatch({ type: "DARK" })}></div>
            </div>
        </div>
    )
}

export default Sidebar