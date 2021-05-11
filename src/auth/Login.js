import React, {useState} from "react";
import {AppBar, MuiThemeProvider, RaisedButton} from "material-ui";
import {TextField, Card} from '@material-ui/core';
import "./Auth.css"
import RTL from "../features/RTL";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import {useDispatch, useSelector} from "react-redux";
import {saveToken, saveAccountNumber, saveBankNumber, selectAccountNumber, selectBankNumber} from './authSlice'
import {useHistory} from "react-router";
import {login, register} from '../Apis/Apis'
import Button from "@material-ui/core/Button";

export default function Login() {
    const dispatch = useDispatch();
    const bankNumber = useSelector(selectBankNumber);
    const accountNumber = useSelector(selectAccountNumber);

    let history = useHistory();
    const statusTypes = {
        register: 1,
        login: 0,
    };

    const buttonStyle = {
        margin: 15,
    };

    const [error, setError] = useState("");
    // const [accountNumber, setFirstName] = useState("");
    // const [bankNumber, setBankNumber] = useState("");
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

    const loginRegister = async e => {
        e.preventDefault();
        if (status === statusTypes.login) {
            const promise = await login(accountNumber, bankNumber, password);
            if (promise === null) {
                setError("התחברות נכשלה");
                return;
            } else if (promise === 422) {
                setError("משתמש לא קיים");
                return;
            }
            dispatch(saveToken(promise));
            sessionStorage.setItem('token', promise);
            history.push('/personalDetails');
        } else {
            const promise = await register(accountNumber, bankNumber, password);
            setError(promise);
            console.log(promise);
        }
    };

    return (
        <>
            <div className='auth' variant="outlined">
                <Card>
                    <MuiThemeProvider>
                        <div className="">
                            <h1 className="header">{texts[status].header}</h1>
                            {/*<AppBar*/}
                            {/*    // onLeftIconButtonClick={handleProfileMenuOpen}*/}
                            {/*title={texts[status].header}*/}
                            {/*// titleStyle={{paddingLeft: '45px'}}*/}
                            {/*/>*/}
                            <RTL children={
                                <TextField
                                    style={{width: '80%'}}
                                    label="מספר חשבון"
                                    value={accountNumber}
                                    onChange={e => dispatch(saveAccountNumber(e.target.value))}
                                />
                            }/>
                            <br/>
                            <RTL children={
                                <TextField
                                    style={{width: '80%'}}
                                    label="מספר בנק"
                                    value={bankNumber}
                                    onChange={e => dispatch(saveBankNumber(e.target.value))}
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
                            <h1>{error}</h1>
                            <Button variant="contained"
                                    color="secondary"
                                    label={texts[status].buttonAuth}
                                    primary={true}
                                    style={buttonStyle}
                                    onClick={loginRegister}
                            >
                                {texts[status].buttonAuth}
                            </Button>
                            <br/>
                            <h5>{texts[status].goOtherPage}</h5>
                            <Button variant="contained"
                                    color="secondary"
                                    label={texts[status].buttonGoOtherPage}
                                    primary={true}
                                    style={buttonStyle}
                                    onClick={() => handleMenuClose(texts[status].otherStatus)}
                            >
                                {texts[status].buttonGoOtherPage}
                            </Button>
                            {/*{renderMenu}*/}
                        </div>
                    </MuiThemeProvider>
                </Card>
            </div>
        </>
    )
}
