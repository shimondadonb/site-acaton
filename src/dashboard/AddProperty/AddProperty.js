import React, {useState} from "react";
import RTL from "../../features/RTL";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {MuiThemeProvider, RaisedButton} from "material-ui";
import {saveProperty} from '../Property/propertiesSlice';
import {useDispatch} from "react-redux";
import '../../App.css';

export default function AddProperty() {
    const [hideFields, setHideFields] = useState(true);
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [loan, setLoan] = useState("");
    const dispatch = useDispatch();

    const buttonStyle = {
        margin: 15,
    };

    const fields = <>
        <MuiThemeProvider>
            <div style={{marginBottom: '20px'}}  className="AAA">
                <RTL children={
                    <TextField
                        style={{width: '80%'}}
                        label="סוג הנכס"
                        value={type}
                        onChange={e => setType(e.target.value)}
                    />
                }/>
                <RTL children={
                    <TextField
                        style={{width: '80%'}}
                        label="שווי"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                }/>
                <RTL children={
                    <TextField
                        style={{width: '80%'}}
                        label="הלוואות על הנכס"
                        value={loan}
                        onChange={e => setLoan(e.target.value)}
                    />
                }/>
                <br/>
                <RTL children={
                    <RaisedButton label="שמור"
                                  primary={true}
                                  style={buttonStyle}
                                  onClick={() => {
                                      console.log("saddsadasdasd");
                                      dispatch(saveProperty({type, value, loan}));
                                      setHideFields(true);
                                      setType("");
                                      setValue("");
                                      setLoan("");
                                  }}
                    />
                }/>
            </div>
        </MuiThemeProvider>
    </>;
    const v = <AddCircleOutlineIcon
        style={{fontSize: "100px"}}
        onClick={() => setHideFields(false)}/>
    return (
        <>
            {
                hideFields ?
                    v :
                    fields
            }
        </>
    )
}
