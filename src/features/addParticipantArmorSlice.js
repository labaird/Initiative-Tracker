import {createSlice} from "@reduxjs/toolkit";

export const addParticipantArmorSlice = createSlice({
    name: 'addParticipantArmor',
    initialState: '',
    reducers: {
        updateArmor: (state, action) => {
            return action.payload;
        }
    }
});

export const { updateArmor } = addParticipantArmorSlice.actions;

export const addParticipantArmorReducer = addParticipantArmorSlice.reducer;