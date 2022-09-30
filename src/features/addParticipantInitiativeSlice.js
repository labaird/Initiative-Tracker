import {createSlice} from "@reduxjs/toolkit";

export const addParticipantInitiativeSlice = createSlice({
    name: 'addParticipantInitiative',
    initialState: '',
    reducers: {
        updateInitiative: (state, action) => {
            return action.payload;
        }
    }
});

export const { updateInitiative } = addParticipantInitiativeSlice.actions;

export const addParticipantInitiativeReducer = addParticipantInitiativeSlice.reducer;
