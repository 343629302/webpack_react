import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';
import ToDoList from './todo-list.jsx';
import 'antd/dist/antd.css';
import './scss/app.scss';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { HashRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        {/* hash路由  */}
        <HashRouter>
            {/* path:地址  exact:是否必须全等于才显示，最好有这个参数   render:渲染的页面   
            component:组件  */}
            <Route path="/" exact component={ToDoList}></Route>
            <Route path="/detail" exact render={() => <App />}></Route>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);
