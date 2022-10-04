import React from "react";
import {Field} from "../../index";
import {updateHealthActionFactory} from "./updateHealthActionFactory";

export function HealthField(props) {
    const {id, health} = props;

    return <Field id={id} value={health} updateActionFactory={updateHealthActionFactory} />;
};
