import {createSlice} from "@reduxjs/toolkit";

export const addParticipantHealthSlice = createSlice({
    name: 'addParticipantHealth',
    initialState: '',
    reducers: {
        updateHealth: (state, action) => {
            return action.payload;
        }
    }
});

export const { updateHealth } = addParticipantHealthSlice.actions;

export const addParticipantHealthReducer = addParticipantHealthSlice.reducer;