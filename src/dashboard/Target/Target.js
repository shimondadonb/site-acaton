import React, {useState} from "react";
import MenuHook from "../MenuHook/MenuHook";
import {useSelector} from "react-redux";
import TableCustom from "../../TableCustom/TableCustom";
import {propertiesColumn, targetColumn} from "../../Columns/columns";
import AddTarget from "../AddTarget/AddTarget";
import {targetsData} from "./targetsSlice";
import {Card, MuiThemeProvider, RaisedButton} from "material-ui";
import RTL from "../../features/RTL";
import {getAdviceWithoutTarget} from "../../Apis/Apis";

export default function Target() {
    const [targets] = useSelector(targetsData);
    const [advice, setAdvice] = useState("");

    const callGetAdvice = async () => {
        const adviceText = await getAdviceWithoutTarget("", "");
        setAdvice(adviceText);
    };

    return (
        <>
            <h1 className="subHeaderText">מטרות</h1>
            {/*<TableCustom data={targets}*/}
            {/*             columns={targetColumn}/>*/}
            <div style={{paddingTop: '30px'}}/>
            <AddTarget/>
            {
                targets.length > 0 ?
                    <></>
                    : null
            }
            <br/>
            <MuiThemeProvider>
                <RTL children={
                    <RaisedButton label="קבל הצאות ללא מטרות"
                                  primary={true}
                        // style={buttonStyle}
                                  onClick={callGetAdvice}
                    />
                }/>
                <br/>
                {advice === '' ? null :
                    <Card
                        style={{
                            marginTop: '7px',
                            width: '50%',
                            display: 'inline-table',
                            padding: '5px',
                            borderRadius: '10px'
                        }}>
                        <span>{advice}</span>
                    </Card>
                }
            </MuiThemeProvider>
        </>
    );
}
