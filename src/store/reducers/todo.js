const defaultState = {
    list: ['321'],
};

function todos(state = defaultState, action) {
    if (action.type === 'add_list'){
        const temState = Object.assign({}, JSON.parse(JSON.stringify(state)));
        temState.list.push(action.item);
        return temState;
    } else if (action.type === 'delete_list'){
        const temState = Object.assign({}, JSON.parse(JSON.stringify(state)));
        temState.list.splice(action.index, 1);
        return temState;
    }
    return state;
}

export default todos;
