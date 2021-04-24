import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import {
    EuiInMemoryTable,
} from '@elastic/eui';
import '../App.css'

export const IncomeOutcome = ({data, columns}) => {
    const [pageIndex, setPageIndex] = useState(0);
    const [pageSize, setPageSize] = useState(5);
    const [sortField, setSortField] = useState('firstName');
    const [sortDirection, setSortDirection] = useState('asc');

    const onTableChange = ({page = {}, sort = {}}) => {
        const {index: pageIndex, size: pageSize} = page;

        const {field: sortField, direction: sortDirection} = sort;

        setPageIndex(pageIndex);
        setPageSize(pageSize);
        setSortField(sortField);
        setSortDirection(sortDirection);
    };

    // const data = [{id:1,age:'aaaa', lastName:'bbbbb'},{id:2,age:'ddddddd', lastName:'ccccccc'}];

    const pagination = {
        pageIndex: pageIndex,
        pageSize: pageSize,
        totalItemCount: 2,
        pageSizeOptions: [3, 5, 8],
    };

    const sorting = {
        sort: {
            field: sortField,
            direction: sortDirection,
        },
        enableAllColumns: true,
        readOnly: false,
    };

    useEffect(() => {
        let x = document.getElementsByClassName("euiButtonEmpty__text");
        console.log("x",x, x.length)
        for (let i = 0; i < x.length; i++){
            if(x[i].innerHTML.includes("Rows per page:") || x[i].innerHTML.includes("מספר רשומות בעמוד")){
                x[i].innerHTML = "מספר רשומות בעמוד " + pageSize;
            }
        }
        x = document.getElementsByClassName("euiContextMenuItem__text");
        for (let i = 0; i < x.length; i++){
            if(x[i].innerHTML.includes("rows")){
                x[i].innerHTML = x[i].innerHTML.replace('rows', 'שורות');
            }
        }
    },[pageSize]);

    return (
        <div className="AAA">
            <EuiInMemoryTable
                className="tableInOut"
                items={data}
                columns={columns}
                pagination={pagination}
                sorting={sorting}
                onChange={onTableChange}
            />
        </div>
    );
};


export default IncomeOutcome
