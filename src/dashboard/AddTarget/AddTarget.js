import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {Card, MuiThemeProvider, RaisedButton} from "material-ui";
import RTL from "../../features/RTL";
import TextField from "@material-ui/core/TextField";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import DateFnsUtils from "@date-io/date-fns";
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import deLocale from "date-fns/locale/he";
import {saveTarget} from "../Target/targetsSlice";
import {getAdviceWithTarget} from "../../Apis/Apis";
import * as moment from "moment";

export default function AddTarget() {
    const [hideFields, setHideFields] = useState(false);
    const [advice, setAdvice] = useState("");
    const [name, setName] = useState("");
    const [date, setDate] = useState(new Date());
    const [error, setError] = useState(false);
    const dispatch = useDispatch();

    const buttonStyle = {
        margin: 15,
    };

    function addProperty() {
        if (name === '' || date === '') {
            setError(true);
            return;
        }
        dispatch(saveTarget({name, date}));
        setHideFields(false);
        // setName("");
        // setDate(new Date());
    }

    async function getAdvice() {
        const dateStr = moment(date).format("YYYY-MM-DD");
        const adviceWithTarget = await getAdviceWithTarget(name, dateStr);
        setAdvice(adviceWithTarget)
    }

    const advicesComponent = advice !== null ?
        <Card style={{
            marginTop: '7px',
            width: '50%',
            display: 'inline-table',
            padding: '5px',
            borderRadius: '10px'
        }}>
            {advice.split('\n')
                .map(value => <p style={{
                    textAlign: 'left',
                    direction: 'ltr'
                }}>{value}</p>)}
        </Card>
        : <Card style={{
            marginTop: '7px',
            width: '50%',
            display: 'inline-table',
            padding: '5px',
            borderRadius: '10px'
        }}><p style={{
            textAlign: 'left',
            direction: 'ltr'
        }}>אין הצאות בחר תאריך רחוק יותר</p>
        </Card>;

    const fields = <>
        <MuiThemeProvider>
            <div style={{marginBottom: '20px'}} className="AAA">
                <RTL children={
                    <TextField
                        error={error}
                        style={{width: '80%'}}
                        label="המטרה"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                }/>
                <br/>
                <MuiPickersUtilsProvider locale={deLocale} utils={DateFnsUtils}>
                    {/*<RTL children={*/}
                    <KeyboardDatePicker
                        margin="normal"
                        okLabel="אישור"
                        disablePast={true}
                        cancelLabel="ביטול"
                        id="date-picker-dialog"
                        label="תאריך יעד"
                        format="MM/dd/yyyy"
                        value={date}
                        onChange={(newDate) => setDate(newDate)}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                    {/*}/>*/}
                </MuiPickersUtilsProvider>
                <br/>
                <RTL children={
                    <RaisedButton label="קבל הצאות"
                                  primary={true}
                                  style={buttonStyle}
                                  onClick={() => {
                                      addProperty();
                                      getAdvice()
                                  }}
                    />
                }/>
                <br/>

                {advice === '' ? null : advicesComponent}
                {/*<span>{advice}</span>*/}
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
