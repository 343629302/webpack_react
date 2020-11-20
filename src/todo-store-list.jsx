import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class todoStoreList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <ul style={{ marginRight: '20px' }}>
                    {this.props.list.map((item, index) => {
                        return <li key={index}>
                            <span onClick={() => this.props.handleItemClick(index)}>{item}</span>
                            <button onClick={() => this.props.handleGetList()}>获取列表</button>
                        </li>;
                    })}
                </ul>
            </>
        );
    }
}

todoStoreList.propTypes = {
    list: PropTypes.array,
    handleItemClick: PropTypes.func,
    handleGetList: PropTypes.func,
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        handleItemClick(index){
            const action = {
                type: 'delete_list',
                index: index
            }
            dispatch(action);
        },
        handleGetList(){
            const action = {
                type: 'GET_TODOLIST',
            }
            dispatch(action);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(todoStoreList);
