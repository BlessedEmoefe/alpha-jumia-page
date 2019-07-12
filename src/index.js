import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Header from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import FooterTwo from "./components/FooterTwo"

ReactDOM.render(<FooterTwo/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
