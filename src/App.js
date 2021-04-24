import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import {useSelector} from "react-redux";
import {selectToken} from "./auth/authSlice";
import Login from "./auth/Login";
import '@elastic/eui/dist/eui_theme_light.css';
import PersonalDetails from "./dashboard/PersonalDetails/PersonalDetails";
import Property from "./dashboard/Property/Property";

function App() {
    const token = useSelector(selectToken);

    return (
        <div className="App">
            <div className="wrapper">
                <h5 className="headerText">תכנון תקציב</h5>
                <BrowserRouter>
                    {!token ?
                        <>
                            <Login/>
                        </>
                        :
                        <Switch>
                            <Route path="/personalDetails">
                                <PersonalDetails/>
                            </Route>
                            <Route path="/property">
                                <Property/>
                            </Route>
                            <Route path="/auth">
                                auth
                            </Route>
                            <Route path="/">
                                <PersonalDetails/>
                            </Route>
                        </Switch>
                    }
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
