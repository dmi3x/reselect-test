import {createSelector} from 'reselect';
import {calcText} from './utils';

export const calcTitle = createSelector(
    state => state.counter,
    counter => calcText(counter)
);