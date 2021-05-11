import {createSlice} from "@reduxjs/toolkit";

export const targetsSlice = createSlice({
    name: 'targets',
    initialState: {
        value: [[{
            name: 'fff',
            date: new Date().getTime(),
        }]]
    },
    reducers: {
        saveTarget: (state, action) => {
            console.log("action", action);
            state.value[0].push({
                name: action.payload.name,
                date: action.payload.date.getTime(),
            });
        },
    }
});

export const {saveTarget} = targetsSlice.actions;

export const targetsData = (state) => state.targets.value;

export default targetsSlice.reducer;

