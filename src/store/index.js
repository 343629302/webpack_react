import { applyMiddleware, createStore } from 'redux';
import todos from './reducers/todo.js';
import createSagaMiddleware from 'redux-saga';
import watchTodoAsync from './sagas/todo';
import { all } from 'redux-saga/effects';

//saga根集合,可以装填多个saga
function * rootSaga() {
    yield all([watchTodoAsync()]);
}

//创建saga中间件,并且需要把他添加到Store中间件里面
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    todos,
    //添加中间件
    applyMiddleware(sagaMiddleware)
);

//执行saga根集合
sagaMiddleware.run(rootSaga);

export default store;
