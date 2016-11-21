import * as React from 'react';
import { createStore } from 'redux';

var actions = [
    {type: 'add', value: 1 },
    {type: 'add', value: 2 },
    {type: 'subtract', value: 3 },
    {type: 'subtract', value: 5 },
    {type: 'add', value: 20 },
];

var final =actions.reduce( (state, action) => {
    switch(action.type)
    {
        case 'add':
            return Object.assign({}, state, {sum: state.sum + action.value});
        case 'subtract':
            return Object.assign({}, state, {sum: state.sum - action.value});
        default:
            return state;
    }
}, {sum: 0});

console.log(final);
