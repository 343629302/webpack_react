import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Button, Input } from 'antd';
import store from './store/index.js';
import TodoStoreList from './todo-store-list.jsx';

class ToDoList extends React.Component {
    constructor() {
        super();
        this.state = {
            inputValue: '',
            list: [],
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

    handleListItemClick(val, index){
        let temList = [].concat(this.state.list);
        temList.splice(index, 1);
        this.setState({
            list: temList
        })
        store.dispatch({
            type: 'add_list',
            item: val
        })
    }

    render() {
        return (
            <>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <Input
                        placeholder="Basic usage"
                        style={{ width: '200px', marginRight: '20px', marginLeft: '20px' }}
                        value={this.state.inputValue}
                        onChange={(val) => this.handleValueChange(val)}
                    />
                    <Button type="primary" onClick={() => this.handleClick()}>
                        保存
                    </Button>
                </div>
                <div style={{ display: 'flex', marginTop: '20px' }}>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return <li key={index} onClick={()=>this.handleListItemClick(item, index)}>{item}</li>;
                        })}
                    </ul>
                    <TodoStoreList></TodoStoreList>
                </div>
            </>
        );
    }
}

export default hot(ToDoList);
