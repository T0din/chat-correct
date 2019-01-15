const initialState = {
    settingsOpened: false,
    settingsInput: 'Tony',
    messages: [],
    messageInput: '', 
};

// Types

const TOGGLE_SETTINGS = 'TOOGLE_SETTINGS';
const CHANGE_SETTINGS = "CHANGE_SETTINGS";
const SUBMIT_SETTINGS = "SUBMIT_SETTINGS";


// Reducer
const reducer = (state = initialState, action = {}) => {
    switch(action.type) {
        case TOGGLE_SETTINGS:
            return {
                ...state,
                settingsOpened: !state.settingsOpened,
            }
        case CHANGE_SETTINGS:
            return {
                ...state,
                settingsInput: action.text,
            }
        case SUBMIT_SETTINGS:
            return {
                ...state,
                settingsOpened: false,
            }
        default:
            return state;
    }
}


// Action Creators


export const toggleSettings = () => {
    console.log('action created');
    return {
        type: TOGGLE_SETTINGS,
    };
}
export const changeSettings = (text) => ({
    type: CHANGE_SETTINGS,
    text,
});

export const submitSettings = () => ({
    type: SUBMIT_SETTINGS,
});

export default reducer;