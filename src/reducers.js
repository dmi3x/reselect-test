import {combineReducers} from "redux";

const counter = (state = 0, action) => {
    console.log(state, action);
    if (action.type === 'INCREMENT') {
        state = state + 1;
    }
    return state;
};

export default combineReducers({
    counter
});