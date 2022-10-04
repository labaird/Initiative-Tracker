import React from "react";
import {updateInitiativeActionFactory} from "./updateInitiativeActionFactory";
import {Field} from "../../index";

export function InitiativeField(props) {
    const {initiative, id} = props

    return <Field value={initiative} id={id} updateActionFactory={updateInitiativeActionFactory} isRequired />
}