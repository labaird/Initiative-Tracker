import {useSelector} from "react-redux";
import {sortParticipants} from "./sortParticipants";

export function useParticipants () {
    const participants = useSelector(state => state.participants);

    return sortParticipants(participants);
}