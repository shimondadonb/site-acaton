import React, {useState} from 'react';
import * as moment from "moment";
import {propertiesColumn} from "../../Columns/columns";
import TableCustom from "../../TableCustom/TableCustom";
import MenuHook from "../MenuHook/MenuHook";
import {useSelector} from "react-redux";
import {propertiesData} from './propertiesSlice';
import AddProperty from "../AddProperty/AddProperty";

export default function Property() {
    const [view, renderMenu] = MenuHook();
    const [properties] = useSelector(propertiesData);
    return (
        <>
            {view}
            <h1 className="subHeaderText">נכסים</h1>
            <TableCustom data={properties}
                         columns={propertiesColumn}/>
            <div style={{paddingTop: '30px'}}/>
            <AddProperty/>
            {renderMenu}
        </>
    );
}
