import { createStore } from 'redux';
import todos from './reducers/todo.js';

export default createStore(todos);
