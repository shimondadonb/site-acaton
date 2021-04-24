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
        token: getToken()
    },
    reducers: {
        saveToken: (state, action) => {
            console.log("action", action);
            state.token = action.payload;
        },
    }
});

export const {saveToken} = authSlice.actions;

export const selectToken = (state) => state.auth.token;

export default authSlice.reducer;

