import React from 'react';
import {connect} from "react-redux";
import {calcTitle} from "../selectors";
import Title from "./Title";

const TitleCounter = ({title}) => {
    return <Title text={title} />
};

export default connect(
    (state) => ({
        title: calcTitle(state)
    })
)(TitleCounter);