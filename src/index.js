import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app.jsx';
import ToDoList from './todo-list.jsx';
import 'antd/dist/antd.css';
import './scss/app.scss';
import { Provider } from 'react-redux';
import store from './store/index.js';

ReactDOM.render(
    <Provider store={store}>
        <ToDoList />
    </Provider>,
    document.getElementById('root')
);
