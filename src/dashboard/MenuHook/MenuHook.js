import React, {useState} from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {AppBar, MuiThemeProvider} from "material-ui";
import {useHistory} from "react-router";
import {saveToken} from "../../auth/authSlice";
import {useDispatch } from "react-redux";

export default function MenuHook() {
    let history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [page, setPage] = useState(0);
    const isMenuOpen = Boolean(anchorEl);
    const dispatch = useDispatch();

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (page) => {
        setAnchorEl(null);
        switch (page) {
            case 0:
                history.push('/personalDetails');
                break;
            case 1:
                history.push('/property');
                break;
            case 2:
                history.push('/target');
                break;
            case 3:
                dispatch(saveToken());
                sessionStorage.removeItem('token');
                break;
        }
        // setStatus(status);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id="sss"
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={() => setAnchorEl(null)}
        >
            <MenuItem onClick={() => handleMenuClose(0)}>פרטים אישיים</MenuItem>
            <MenuItem onClick={() => handleMenuClose(1)}>נכסים</MenuItem>
            <MenuItem onClick={() => handleMenuClose(2)}>מטרות</MenuItem>
            <MenuItem onClick={() => handleMenuClose(3)}>התנתק</MenuItem>
        </Menu>
    );

    const view =  <div className="Top-bar">
        <MuiThemeProvider>
            <AppBar
                onLeftIconButtonClick={handleProfileMenuOpen}
                title="פרטים אישיים"
                titleStyle={{paddingLeft: '45px'}}/>
        </MuiThemeProvider>
    </div>

    return [view, renderMenu, handleMenuClose, handleProfileMenuOpen, isMenuOpen, anchorEl, setAnchorEl]
}
