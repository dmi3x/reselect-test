import React from 'react';
import {connect} from "react-redux";

const Status = ({counter}) => {
    return <p>Count: {counter}</p>
};

export default connect(
    ({counter}) => ({counter})
)(Status);