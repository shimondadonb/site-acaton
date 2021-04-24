import {createSlice} from "@reduxjs/toolkit";

export const propertiesSlice = createSlice({
    name: 'properties',
    initialState: {
        value: [[{
            type: 'fff',
            value: 'fff',
            loan: 'fff',
        }]]
    },
    reducers: {
        saveProperty: (state, action) => {
            console.log("action", action);
            state.value[0].push({
                type: action.payload.type,
                value: action.payload.value,
                loan: action.payload.loan,
            });
        },
    }
});

export const {saveProperty} = propertiesSlice.actions;

export const propertiesData = (state) => state.properties.value;

export default propertiesSlice.reducer;

