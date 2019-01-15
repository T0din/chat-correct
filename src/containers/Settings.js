import { connect } from 'react-redux';
import Settings from '../components/Settings';
import { changeSettings, toggleSettings, submitSettings } from '../store/reducer';

const mapStateToProps = (state) => ({
    settingsOpened: state.settingsOpened,
    settingsInput: state.settingsInput,
});

const mapDispatchToProps = (dispatch) => ({
    changeSettings: (text) => {
        dispatch(changeSettings(text));
    },
    toggleSettings: () => {
        console.log('Action ready to be emmited');
        dispatch(toggleSettings());
    },
    submitSettings: () => {
        dispatch(submitSettings());
    },
});

const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings);

export default SettingsContainer;