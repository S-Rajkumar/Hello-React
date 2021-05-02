import React from 'react';
import OnChange from './formFields/onChange.js';
import OnChangeFromChild from './formFields/onChangeFromChild.js';
import ButtonClick from './formFields/buttonClick.js';
import ButtonClickFromChild from './formFields/buttonClickFromChild.js';
import RefsDemo from './formFields/refs.js';

class FormFields extends React.Component {

    render(){
        return(
            <div>
                <h1>FormFields</h1>
                <h2>onChange</h2>
                <OnChange />
                <h2>onChangeFromChild</h2>
                <OnChangeFromChild />
                <h2>ButtonClick</h2>
                <ButtonClick />
                <h2>ButtonClickFromChild</h2>
                <ButtonClickFromChild />
                <h2>Refs</h2>
                <RefsDemo />
            </div>
        )
    }
}

export default FormFields;