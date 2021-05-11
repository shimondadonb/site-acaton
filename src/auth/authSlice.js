import {createSlice} from "@reduxjs/toolkit";

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    // const userToken = JSON.parse(tokenString);
    // return userToken?.token
    return tokenString;
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: getToken(),
        bankNumber: '09-6877184',
        accountNumber: 'It'
    },
    reducers: {
        saveToken: (state, action) => {
            state.token = action.payload;
        },
        saveBankNumber: (state, action) => {
            state.bankNumber = action.payload;
        },
        saveAccountNumber: (state, action) => {
            state.accountNumber = action.payload;
        },
    }
});

export const {saveToken, saveAccountNumber, saveBankNumber} = authSlice.actions;

export const selectToken = (state) => state.auth.token;
export const selectBankNumber = (state) => state.auth.bankNumber;
export const selectAccountNumber = (state) => state.auth.accountNumber;

export default authSlice.reducer;

