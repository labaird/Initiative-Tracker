import {createSlice} from "@reduxjs/toolkit";

export const addParticipantNameSlice = createSlice({
    name: 'addParticipantName',
    initialState: '',
    reducers: {
        updateName: (state, action) => {
            return action.payload;
        }
    },
});

export const { updateName } = addParticipantNameSlice.actions;

export const addParticipantNameReducer = addParticipantNameSlice.reducer;


