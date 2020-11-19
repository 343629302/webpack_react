const defaultState = {
    list: ['321'],
};

function todos(state = defaultState, action) {
    if (action.type === 'add_list'){
        const temState = Object.assign({}, state);
        temState.list.push(action.item);
        return temState;
    }
    return state;
}

export default todos;
