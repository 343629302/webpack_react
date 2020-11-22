import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button, Input } from 'antd';
import store from './store/index.js';
import TodoStoreList from './todo-store-list.jsx';
import { Redirect } from 'react-router-dom';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            list: [],
            login: true,
        };
    }

    handleValueChange(val) {
        this.setState({
            inputValue: val.target.value,
        });
    }

    handleClick() {
        let temArr = [].concat(this.state.list);
        temArr.push(this.state.inputValue);
        this.setState({
            list: temArr,
            inputValue: '',
        });
    }

    handleListItemClick(val, index) {
        let temList = [].concat(this.state.list);
        temList.splice(index, 1);
        this.setState({
            list: temList,
        });
        store.dispatch({
            type: 'add_list',
            item: val,
        });
    }

    render() {
        //如果登陆状态，则显示页面
        if (this.state.login) {
            return (
                <>
                    <div>界面</div>
                </>
            );
        //如果不是登陆状态，则没有权限，会跳转回去登陆页面
        } else {
            return <Redirect to="/app"></Redirect>;
        }
    }
}

export default hot(ToDoList);
