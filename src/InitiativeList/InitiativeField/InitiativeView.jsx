import React from "react";

export function InitiativeView (props) {
    const {toggleEditor, initiative} = props;

    return (
        <td onClick={toggleEditor}>
            {initiative}
        </td>
    );
}