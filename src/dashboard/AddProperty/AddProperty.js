import React, {useState} from "react";
import RTL from "../../features/RTL";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import {MuiThemeProvider, RaisedButton} from "material-ui";
import {saveProperty} from '../Property/propertiesSlice';
import {useDispatch} from "react-redux";
import '../../App.css';
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormLabel from "@material-ui/core/FormLabel";

export default function AddProperty() {
    const [hideFields, setHideFields] = useState(true);
    const [type, setType] = useState("");
    const [value, setValue] = useState("");
    const [loan, setLoan] = useState(false);
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const buttonStyle = {
        margin: 15,
    };

    function addProperty() {
        console.log("saddsadasdasd");
        if (type === '' || value === '' || loan === '') {
            setError(true);
            return;
        }
        dispatch(saveProperty({type, value, loan}));
        setHideFields(true);
        setType("");
        setValue("");
        setLoan("");
    }

    const fields = <>
        <MuiThemeProvider>
            <div style={{marginBottom: '20px'}} className="AAA">
                <RTL children={
                    <TextField
                        error={error}
                        style={{width: '80%'}}
                        label="סוג הנכס"
                        value={type}
                        onChange={e => setType(e.target.value)}
                    />
                }/>
                <RTL children={
                    <TextField
                        error={error}
                        style={{width: '80%'}}
                        label="שווי"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                }/>
                <br/>
                <RTL children={
                    <>
                        <RadioGroup
                            style={{display: 'contents', flexDirection: 'row'}}
                            aria-label="lone" name="lone" value={loan} onChange={() => setLoan(!loan)}>
                            <span>הלוואות על הנכס</span>
                            <FormControlLabel
                                value={true}
                                control={<Radio/>} label="יש"/>
                            <FormControlLabel value={false}
                                              control={<Radio/>} label="אין"/>
                        </RadioGroup>
                    </>
                }/>
                <br/>
                <RTL children={
                    <RaisedButton label="שמור"
                                  primary={true}
                                  style={buttonStyle}
                                  onClick={() => {
                                      addProperty();
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
