import React from 'react';
import {connect} from "react-redux";
import {calcText} from "../utils";
import Title from "./Title";

const TitleCounter = ({counter}) => {
    let text = calcText(counter);
    return <Title text={text} />
};

export default connect(
    state => ({
        counter: state.counter
    })
)(TitleCounter);