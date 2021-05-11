import React, {useEffect, useState} from 'react';
import * as moment from "moment";
import {incomeOutcomeColumn, loanColumn} from "../../Columns/columns";
import TableCustom from "../../TableCustom/TableCustom";
import MenuHook from "../MenuHook/MenuHook";
import {balance, getLoans} from "../../Apis/Apis";
import {useSelector} from "react-redux";
import {saveToken, saveAccountNumber, saveBankNumber, selectAccountNumber, selectBankNumber} from '../../auth/authSlice'
import SideBar from "../../SideBar/SIdeBar";

export default function PersonalDetails() {
    // const [view, renderMenu] = MenuHook();
    const bankNumber = useSelector(selectBankNumber);
    const accountNumber = useSelector(selectAccountNumber);
    const [incomeOut, setIncomeOut] = useState([]);
    const [loans, setLoans] = useState([]);

    useEffect(() => {
        // console.log("-----",bankNumber , accountNumber)
        balance(bankNumber, accountNumber)
            .then(json => {
                if(json)
                    setIncomeOut(json);
            });
        getLoans(bankNumber, accountNumber).then(json => {
            if(json)
                setLoans(json);
        })
    }, []);

    return (
        <>
            {/*{view}*/}
            <h1 className="subHeaderText">עובר ושב</h1>
            <TableCustom data={incomeOut}
                         columns={incomeOutcomeColumn}/>
            <h1 className="subHeaderText">הלוואות</h1>
            <TableCustom data={loans}
                         columns={loanColumn}/>

            <div style={{paddingTop: '30px'}}/>
            {/*{renderMenu}*/}
        </>
    );
}
