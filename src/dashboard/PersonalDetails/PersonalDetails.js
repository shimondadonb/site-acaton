import React, {useState} from 'react';
import * as moment from "moment";
import {incomeOutcomeColumn} from "../../Columns/columns";
import TableCustom from "../../TableCustom/TableCustom";
import MenuHook from "../MenuHook/MenuHook";

export default function PersonalDetails() {
    const [view, renderMenu] = MenuHook();

    return (
        <>
            {view}
            <h1 className="subHeaderText">עובר ושב</h1>
            <TableCustom data={[{id: 1, name: 'shjdgsja', amount: 111, date: moment.now()},
                {id: 2, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 3, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 4, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 5, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 6, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 7, name: 'sdasd', amount: 333, date: moment.now()},
            ]}
                         columns={incomeOutcomeColumn}/>
            <h1 className="subHeaderText">הלוואות</h1>
            <TableCustom data={[{id: 1, name: 'shjdgsja', amount: 111, date: moment.now()},
                {id: 2, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 3, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 4, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 5, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 6, name: 'sdasd', amount: 333, date: moment.now()},
                {id: 7, name: 'sdasd', amount: 333, date: moment.now()},
            ]}
                         columns={incomeOutcomeColumn}/>

            <div style={{paddingTop: '30px'}}/>
            {renderMenu}
        </>
    );
}
