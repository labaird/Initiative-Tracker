import {createSlice} from '@reduxjs/toolkit';

let id = 1;

//participant status options
const aliveStatus = 'alive';
const deadStatus = 'dead';
const unconsciousStatus = 'unconscious';
const unconsciousAndStableStatus = 'unconsciousAndStable';

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

function deleteParticipantSaves (participant) {
    const {name, saves} = participant;

    if (typeof saves !== 'object' || Array.isArray(saves)) {
        throw new Error(`Cannot delete saves of participant ${name}. Saves must be an object. Current value of saves is ${saves}`);
    }

    if (saves) {
        delete participant.saves;
    }

    return saves;
}

// function getParticipantStatus (health, saves) {
//     if (health > 0) {
//         return aliveStatus;
//     }
//
//     if (health <= 0) {
//         if (saves) {
//             if (saves.failures === 3 && saves.successes === 3) {
//                 throw new Error ('Participant cannot have 3 success and 3 failures simultaneously');
//             }
//             if (saves.failures === 3) {
//                 return deadStatus;
//             }
//
//             if (saves.successes === 3) {
//                 return unconsciousAndStableStatus;
//             }
//
//             return unconsciousStatus;
//         }
//     }
// }

function createNewSaves () {
    const saves = {
        successes: 0,
        failures: 0,
    }

    return saves;
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
            status: aliveStatus,
        }, {
            id: 1,
            initiative: 20,
            name: 'Jess',
            armor: 15,
            health: 10,
            status: aliveStatus,
        },
        {
            id: 2,
            initiative: 15,
            name: 'Clark Gable',
            armor: 12,
            health: 0,
            saves: {
                successes: 2,
                failures: 1
            },
            status: unconsciousStatus,
        }
    ],
    reducers: {
        addParticipant: (state, action) => {
            const {initiative, name, armor, health} = action.payload;
            const newParticipant =                 {
                id: generateId(),
                initiative: initiative,
                name: name,
                armor: armor,
                health: health,
                status: aliveStatus,
            };

            if (health <= 0) {
                newParticipant.status = unconsciousStatus;
                newParticipant.saves = createNewSaves();
            }

            state.push(newParticipant);

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
            const participant = findParticipant(state, id);
            let newHealth = health;

            if (health < 0) {
                newHealth = 0;
            }

            if (participant.health <= 0 && newHealth > 0) {
                participant.status = aliveStatus;
                deleteParticipantSaves(participant);
            } else if (participant.health > 0 && newHealth <= 0) {
                participant.status = aliveStatus;
            }

            participant.health = newHealth;

            return state;

        },
        healParticipant: (state, action) => {
            const {id, modifier} = action.payload;
            const participant = findParticipant(state, id);

            if (modifier < 0) {
                throw new Error ('Cannot heal a negative amount');
            }

            if (modifier > 0 && participant.health === 0) {
                participant.status = aliveStatus;
                deleteParticipantSaves(participant);
            }

            participant.health = participant.health + modifier;

            return state;
        },
        damageParticipant: (state, action) => {
            /*Note: did not incorporate the following rules:
                damage at 0 HP: 1 failure. If critical damage at 0 hp, 2 failures
                roll 1 counts as 2 failures. Roll a 20 regains 1 HP.
            */
            const {id, modifier} = action.payload;
            const participant = findParticipant(state, id);
            let newHealth = participant.health - modifier;

            if (modifier < 0) {
                throw new Error('Cannot do negative damage.');
            }
            /*TODO: max health needs to be incorporated, along with death if exceeds maximum.
            if (newHealth <= (participant.maxHealth * -1)) {
                participant.status = deadStatus;
            } else
             */

            if (participant.health > 0 && newHealth <= 0) {
                participant.status = unconsciousStatus;
            }

            if (newHealth <= 0) {
                participant.saves = createNewSaves();
            }

            if (newHealth < 0) {
                newHealth = 0;
            }

            participant.health = newHealth;

            return state;
        },
        updateParticipantSaves: (state, action) => {
            const {id, saves} = action.payload;
            const participant = findParticipant(state, id);

            if (!saves) {
                throw new Error('updateParticipantSaves reducer received saves that are falsy');
            }

            participant.saves = {
                successes: saves.successes,
                failures: saves.failures,
            }

            return state;
        },
        deathSaveSuccess: (state, action) => {
            const id = action.payload;
            const participant = findParticipant(state, id);
            const newSuccessCount = participant.saves.successes + 1;

            if (participant.saves.successes === 3) {
                throw new Error('Participant already has 3 successes. Successes cannot exceed 3');
            }

            if (newSuccessCount === 3) {
                participant.status = unconsciousAndStableStatus;
            }

            participant.saves.successes = newSuccessCount;

            return state;
        },
        deathSaveFailure: (state, action) => {
            const id = action.payload;
            const participant = findParticipant(state, id);
            const newFailuresCount = participant.saves.failures + 1;

            if (participant.saves.failures === 3) {
                throw new Error('Participant already has 3 failures. Failures cannot exceed 3');
            }

            if (newFailuresCount === 3) {
                participant.status = deadStatus;
            }

            participant.saves.failures = participant.saves.failures + 1;

            return state;
        },
        removeDeathSaveSuccess: (state, action) => {
            const id = action.payload;
            const participant = findParticipant(state, id);

            if (participant.saves === undefined) {
                throw new Error('Cannot remove a death save success. Participant saves has a value of undefined');
            }

            if (participant.saves.successes === 0) {
                throw new Error('There are no success saves to remove.');
            }

            if ((participant.status === unconsciousAndStableStatus) && (participant.saves.successes === 3)) {
                participant.status = unconsciousStatus;
            }

            participant.saves.successes = participant.saves.successes - 1;

            return state;
        },
        removeDeathSaveFailure: (state, action) => {
            const id = action.payload;
            const participant = findParticipant(state, id);

            if (participant.saves === undefined) {
                throw new Error ('Cannot remove a death save failure. Participant saves has a value of undefined');
            }

            if (participant.saves.failures === 0) {
                throw new Error('There are no failure saves to remove');
            }

            if ((participant.status === deadStatus) && (participant.saves.failures === 3)) {
                participant.status = unconsciousStatus;
            }

            participant.saves.failures = participant.saves.failures - 1;

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
    healParticipant,
    damageParticipant,
    deathSaveSuccess,
    deathSaveFailure,
    removeDeathSaveSuccess,
    removeDeathSaveFailure,
} = participantsSlice.actions;

export const participantsReducer = participantsSlice.reducer;