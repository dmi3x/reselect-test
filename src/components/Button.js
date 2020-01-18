import React from 'react';
import {connect} from "react-redux";
import {doIncrement} from '../actions';

const Button = ({doIncrement}) => {
    return <button onClick={doIncrement}>Increment</button>
};

export default connect(null, {doIncrement})(Button);