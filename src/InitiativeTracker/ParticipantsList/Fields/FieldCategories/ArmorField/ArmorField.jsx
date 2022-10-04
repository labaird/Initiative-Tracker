import React from "react";
import {Field} from "../../index";
import {updateArmorActionFactory} from "./updateArmorActionFactory";

export function ArmorField (props) {
    const {id, armor} = props;

    return <Field id={id} value={armor} updateActionFactory={updateArmorActionFactory} />
}