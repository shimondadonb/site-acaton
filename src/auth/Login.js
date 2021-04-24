import React, {useState} from "react";
import {AppBar, MuiThemeProvider, RaisedButton} from "material-ui";
import TextField from '@material-ui/core/TextField';
import "./Auth.css"
import RTL from "../features/RTL";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch} from "react-redux";
import {saveToken} from './authSlice'
import {useHistory} from "react-router";

export default function Login() {
    const dispatch = useDispatch();
    let history = useHistory();
    const statusTypes = {
        register: 1,
        login: 0,
    };

    const buttonStyle = {
        margin: 15,
    };

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [status, setStatus] = useState(statusTypes.login);
    const [anchorEl, setAnchorEl] = useState(null);
    const isMenuOpen = Boolean(anchorEl);
    const texts = {
        "0": {
            header: "התחברות",
            buttonAuth: "התחבר",
            goOtherPage: "עדיין אין לך חשבון",
            buttonGoOtherPage: "מעבר להרשמה",
            otherStatus: 1,
        },
        "1": {
            header: "הרשמה",
            buttonAuth: "הרשם",
            goOtherPage: "כבר רשום",
            buttonGoOtherPage: "מעבר להתחברות",
            otherStatus: 0,
        }
    }
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = (status) => {
        setAnchorEl(null);
        setStatus(status);
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
            <MenuItem onClick={() => handleMenuClose(statusTypes.login)}>התחבר</MenuItem>
            <MenuItem onClick={() => handleMenuClose(statusTypes.register)}>הירשם</MenuItem>
        </Menu>
    );

    async function loginUser(credentials) {
        setAnchorEl(null);
        return fetch('http://localhost:3000/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify(credentials)
        })
            .then(data => {
                console.log("data", data);
                data.json();
                return credentials;
            });
    }

    const loginRegister = async e => {
        e.preventDefault();
        const token = "";
        // await loginUser({
        //     username: username,
        //     password: password
        // });
        // console.log("token", token);
        dispatch(saveToken("dsfasdgdag"));
        // sessionStorage.setItem('token', JSON.stringify(userToken));
        sessionStorage.setItem('token', "sadsad");
        history.push('/personalDetails');
        // setToken(token);
    }

    return (
        <div>
            <MuiThemeProvider>
                <div className="Top-bar">
                    <AppBar onLeftIconButtonClick={handleProfileMenuOpen}
                            title={texts[status].header}
                    titleStyle={{paddingLeft: '45px'}}/>
                    {status === statusTypes.register ?
                        <>
                            <RTL children={
                                <TextField
                                    style={{width: '80%'}}
                                    label="שם פרטי"
                                    value={firstName}
                                    onChange={e => setFirstName(e.target.value)}
                                />
                            }/>
                            <br/>
                            <RTL children={
                                <TextField
                                    style={{width: '80%'}}
                                    label="שם משפחה"
                                    value={lastName}
                                    onChange={e => setLastName(e.target.value)}
                                />
                            }/>
                            <br/>
                        </>
                        : null
                    }
                    <RTL children={
                        <TextField
                            style={{width: '80%'}}
                            label="הכנס מייל"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    }/>
                    <br/>
                    <RTL children={
                        <TextField
                            style={{width: '80%'}}
                            id="standard-password-input"
                            type="password"
                            label="הכנס סיסמה"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    }/>
                    <br/>
                    <RaisedButton label={texts[status].buttonAuth}
                                  primary={true}
                                  style={buttonStyle}
                                  onClick={loginRegister}
                    />
                    <br/>
                    <h5>{texts[status].goOtherPage}</h5>
                    <RaisedButton label={texts[status].buttonGoOtherPage}
                                  primary={true}
                                  style={buttonStyle}
                                  onClick={() => handleMenuClose(texts[status].otherStatus)}
                    />
                    {renderMenu}
                </div>
            </MuiThemeProvider>
        </div>
    )
}
