import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App/App';
import * as serviceWorker from './serviceWorker';

const store = {
    user: {
        firstName: 'Alexander',
        lastName: 'Vergeichyk'
    },
    avatar: {
        image: 'https://pp.userapi.com/c633326/v633326717/1fcf6/glv4RHctzuo.jpg',
        alt: 'my photo'
    }
}

ReactDOM.render(<App userData = {store}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
