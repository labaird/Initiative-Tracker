import React, {useState} from 'react';
import {Editor} from './FieldOptions/FieldEditor/Editor';
import {View} from './FieldOptions/View';

export function Field(props) {
    const {value, id, updateActionFactory, isRequired = false} = props
    const [isEditable, setIsEditable] = useState(false);

    function toggleEditor() {
        setIsEditable(!isEditable);
    }

    //TODO: move TD outside of editor
    if (isEditable) {
        return (
            <Editor onSave={toggleEditor} value={value} id={id} updateActionFactory={updateActionFactory}
                    isRequired={isRequired}/>
        );
    }

    return (
        <View toggleEditor={toggleEditor} value={value}/>
    );
}