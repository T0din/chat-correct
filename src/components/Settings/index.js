import React from 'react'
import { Form, Icon } from 'semantic-ui-react';

import './style.scss';

const SettingsInput = ({ value, changeSettings, submitSettings }) => {
    const handleChangeSettings = (event) => {
        changeSettings(event.target.value);
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
        submitSettings();
    };

    return (
        <Form onSubmit={handleFormSubmit}>
            <Form.Input
                value={value} 
                onChange={handleChangeSettings}
                placeholder="Votre pseudo"
            />
        </Form>
    );
};

const PlusButton = ({ onClick }) => (
    <div onClick={onClick}>
        <Icon name="plus"/>
    </div>
);

const Settings = ({ settingsOpened, settingsInput, toggleSettings, changeSettings, submitSettings }) => {
    console.log(toggleSettings)
    return (
        <div className="settings">
            { settingsOpened && (
                <SettingsInput 
                    value={settingsInput} 
                    submitSettings={submitSettings}
                    changeSettings={changeSettings} />
            ) }
            { !settingsOpened && <PlusButton onClick={toggleSettings} /> }
        </div>
)
};

export default Settings;