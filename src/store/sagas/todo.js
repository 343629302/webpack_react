import { put, takeEvery } from 'redux-saga/effects'

function *  getTodoList(){
    //向store发起action
    yield put({type: 'get_list'});
}

//监听方法调用,如果有type一样的,触发对应回调
export default function * watchTodoAsync(){
    yield takeEvery('GET_TODOLIST', getTodoList);
}
