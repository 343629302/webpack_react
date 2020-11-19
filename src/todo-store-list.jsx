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
                {/* <ul style={{ marginRight: '20px' }}>
                    {this.props.list.map((item, index) => {
                        return <li key={index}>{item}</li>;
                    })}
                </ul> */}
            </>
        );
    }
}

todoStoreList.propTypes = {
    list: PropTypes.array
}

export default connect()(todoStoreList);
