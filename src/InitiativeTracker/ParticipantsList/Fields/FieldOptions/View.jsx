import React from "react";

export function View (props) {
    const {toggleEditor, value} = props;

    return (
        <div onClick={toggleEditor}>
            {value}
        </div>
    );
}