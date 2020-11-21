import { combineReducers } from 'redux';
import { fromJS } from 'immutable';

//fromJS实力话一个不可改变对象
const defaultState = fromJS({
    list: ['321'],
});

function todos(state = defaultState, action) {
    if (action.type === 'add_list') {
        //不能使用state.[key] 获取参数，只能使用state.get('key')
        const arr = [].concat(Array.from(state.get('list')));
        arr.push(action.item);
        //修改参数，fromJS会自动获取原始值和改变的值，再生成一个新的对象
        return state.set('list', arr);
    } else if (action.type === 'delete_list') {
        const arr = [].concat(Array.from(state.get('list')));
        arr.splice(action.index, 1);
        return state.set('list', arr);
    } else if (action.type === 'get_list') {
        console.log(2);
    }
    return state;
}

/*
 * combineReducers组合Reducers，可以避免如果有变量与其他Reducer重名产生的错误。
 * 外界需要state.key.value来获取某个Reducer的属性
 */
export default combineReducers({
    todos,
});
