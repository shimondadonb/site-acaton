import SideNav, {Toggle, Nav, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GpsFixedIcon from '@material-ui/icons/GpsFixed';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import "./SideBar.css"
import React, {useState} from "react";
import {saveToken} from "../auth/authSlice";
import {useHistory} from "react-router";
import {useDispatch} from "react-redux";

export default function SideBar() {
    let history = useHistory();
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);

    const navigate = (page) => {
        switch (page) {
            case 'home':
                history.push('/personalDetails');
                break;
            // case 1:
            //     history.push('/property');
            //     break;
            case 'gaols':
                history.push('/target');
                break;
            case 'logout':
                dispatch(saveToken());
                sessionStorage.removeItem('token');
                break;
        }
        // setStatus(status);
    };

    function onExtends(isOpen) {
        setOpen(isOpen);
    }

    return (
        <div style={{direction: 'ltr'}}>
            <SideNav onToggle={onExtends}
                     onSelect={(selected) => {
                         console.log(selected);
                         navigate(selected);
                     }}
            >
                <SideNav.Toggle/>
                <SideNav.Nav defaultSelected="home">
                    <NavItem disabled={!open} eventKey="home">
                        <NavIcon>
                            <AccountBoxIcon
                                className="Icon"
                                fontSize="large"/>
                        </NavIcon>
                        <NavText>
                            מידע אישי
                        </NavText>
                    </NavItem>
                    <NavItem disabled={!open} eventKey="gaols">
                        <NavIcon>
                            <GpsFixedIcon
                                className="Icon"
                                fontSize="large"/>
                        </NavIcon>
                        <NavText>
                            מטרות
                        </NavText>
                    </NavItem>
                    <NavItem disabled={!open} eventKey="logout">
                        <NavIcon>
                            <ExitToAppIcon
                                className="Icon"
                                fontSize="large"/>
                        </NavIcon>
                        <NavText>
                            התנתק
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>
    )
}
