import {configureStore} from '@reduxjs/toolkit';
import {participantsReducer} from '../features/participantsSlice';
import {addParticipantInitiativeReducer} from "../features/addParticipantInitiativeSlice";
import {addParticipantNameReducer} from "../features/addParticipantNameSlice";
import {addParticipantArmorReducer} from "../features/addParticipantArmorSlice";
import {addParticipantHealthReducer} from "../features/addParticipantHealthSlice";

export const store = configureStore({
    reducer: {
        participants: participantsReducer,
        addParticipantInitiative: addParticipantInitiativeReducer,
        addParticipantName: addParticipantNameReducer,
        addParticipantArmor: addParticipantArmorReducer,
        addParticipantHealth: addParticipantHealthReducer,
    },
});
