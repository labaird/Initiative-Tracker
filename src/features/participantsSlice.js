import {createSlice} from '@reduxjs/toolkit';

let id = 1;

function generateId() {
    id = id + 1;

    return id;
}

function findParticipant (participants, id) {
    for (let i = 0; i < participants.length; i = i + 1) {
        if (participants[i].id === id) {
            return participants[i];
        }
    }
}

export const participantsSlice = createSlice({
    name: 'participants',
    initialState: [
        {
            id: 0,
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
            const {id, initiative} = action.payload;

            findParticipant(state, id).initiative = initiative;

            return state;
        },
        updateParticipantName: (state, action) => {
            const {id, name} = action.payload;

            findParticipant(state, id).name = name;

            return state;
        },
        updateParticipantArmor: (state, action) => {
            const {id, armor} = action.payload;

            findParticipant(state, id).armor = armor;

            return state;
        },
        updateParticipantHealth: (state, action) => {
            const {id, health} = action.payload;

            findParticipant(state, id).health = health;

            return state;

        },
        increaseParticipantHealth: (state, action) => {
            const {id, modifier} = action.payload;
            const participant = findParticipant(state, id);

            participant.health = participant.health + modifier;
            return state;
        },
        decreaseParticipantHealth: (state, action) => {
            const {id, modifier} = action.payload;
            const participant = findParticipant(state, id);
            let newHealth = participant.health - modifier;

            if (newHealth < 0) {
                newHealth = 0;
            }


            participant.health = newHealth;

            return state;
        }
    },
});

export const {
    addParticipant,
    updateParticipantInitiative,
    updateParticipantName,
    updateParticipantArmor,
    updateParticipantHealth,
    increaseParticipantHealth,
    decreaseParticipantHealth,
} = participantsSlice.actions;

export const participantsReducer = participantsSlice.reducer;