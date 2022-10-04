import React from "react";
import {Field} from "../../index";
import {updateNameActionFactory} from "./updateNameActionFactory";

export function NameField (props) {
    const {name, id} = props;

    return <Field value={name} id={id} updateActionFactory={updateNameActionFactory} isRequired/>
}