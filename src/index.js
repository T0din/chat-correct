import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { websocketConnect } from './store/reducer';
import './index.scss';
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const MyApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
);

ReactDOM.render(<MyApp />, document.getElementById('root'));
store.dispatch(websocketConnect());
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
