import {createSlice} from '@reduxjs/toolkit';

export const addParticipantSlice = createSlice({
    name: 'addParticipant',
    initialState: {
        initiative: '',
        name: '',
        health: '',
        armor: '',
    },
    reducers: {
        updateInitiative: (state, action) => {
            const result = {
                ...state,
            };

            result.initiative = action.payload;

            return result;
        },
        updateName: (state, action) => {
            const result = {
                ...state,
            };

            result.name = action.payload;

            return result;
        },
        updateArmor: (state, action) => {
            const result = {
                ...state,
            }

            result.armor = action.payload;

            return result;
        },
        updateHealth: (state, action) => {
            const result = {
                ...state,
            }
            result.health = action.payload;

            return result;
        },
        resetParticipant: (state, action) => {
            return {
                initiative: '',
                name: '',
                armor: '',
                health: '',
            };
        },
    }
});

export const {updateInitiative, updateName, updateArmor, updateHealth, resetParticipant} = addParticipantSlice.actions;

export const addParticipantReducer = addParticipantSlice.reducer;

