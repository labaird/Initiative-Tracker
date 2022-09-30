import {createSlice} from "@reduxjs/toolkit";

let id = 1;

function generateId () {
    id = id + 1;

    return id;
}

export const participantsSlice = createSlice({
    name: 'participants',
    initialState: [
        {   id: 0,
            initiative: 5,
            name: 'Richard',
            armor: 18,
            health: 20,
        }, {
            id: 1,
            initiative: 20,
            name: 'Jess',
            armor: 15,
            health: 10,
        }
    ],
    reducers: {
        addParticipant: (state, action) => {
            const {initiative, name, armor, health} = action.payload;

            state.push(
                {
                    id: generateId(),
                    initiative: initiative,
                    name: name,
                    armor: armor,
                    health: health,
                }
            );
            //why does this work without returning state?
            return state;
        },
        updateParticipantInitiative: (state, action) => {
            const {index, initiative} = action.payload;
            for (let i = 0; i < state.length; i = i + 1) {
                if (state[i].id === index) {
                    state[i].initiative = initiative;
                    return state;
                }
            }

            return state;
        }
    },
});

export const {addParticipant, updateParticipantInitiative} = participantsSlice.actions;

export const participantsReducer = participantsSlice.reducer;