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
const MESSAGE_CHANGE = 'MESSAGE_CHANGE';
export const MESSAGE_SUBMIT = 'MESSAGE_SUBMIT';
export const WEBSOCKET_CONNECT = 'WEBSOCKET_CONNECT';
export const NEW_MESSAGE = 'NEW_MESSAGE';


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
        case MESSAGE_CHANGE:
            return {
                ...state,
                messageInput: action.text,
            }
        case MESSAGE_SUBMIT:
            return {
                ...state,
                messageInput: '',
            }
        case NEW_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, action.message]
            }
        default:
            return state;
    }
}


// Action Creators


export const toggleSettings = () => {
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

export const messageSubmit = () => ({
    type: MESSAGE_SUBMIT,
});

export const messageChange = (text) => ({
    type: MESSAGE_CHANGE,
    text,
});

export const websocketConnect = () => ({
    type: WEBSOCKET_CONNECT,
});

export const newMessage = (message) => ({
    type: NEW_MESSAGE,
    message,
});

export default reducer;