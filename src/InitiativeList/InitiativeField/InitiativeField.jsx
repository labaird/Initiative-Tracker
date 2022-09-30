import React, {useState} from "react";
import {InitiativeEditor} from "./InitiativeEditor";
import {InitiativeView} from "./InitiativeView";

export function InitiativeField(props) {
    const {initiative, index} = props
    const [clicked, setClicked] = useState(false);

    function toggleEditor() {
        setClicked(!clicked);
    }
    //TODO: move TD outside of editor
    if (clicked) {
        return (
            <InitiativeEditor toggleEditor={toggleEditor} initiative={initiative} index={index}/>
        );
    } else {
        return (
            <InitiativeView toggleEditor={toggleEditor} initiative={initiative}/>
        );
    }
}