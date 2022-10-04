import {configureStore} from '@reduxjs/toolkit';
import {participantsReducer} from '../features/participantsSlice';
import {addParticipantReducer} from "../features/addParticipantSlice";

export const store = configureStore({
    reducer: {
        participants: participantsReducer,
        addParticipant: addParticipantReducer,
    },
});
