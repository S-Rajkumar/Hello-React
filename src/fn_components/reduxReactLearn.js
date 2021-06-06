import React from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        }
    }
});

const store = configureStore({
    counter: counterSlice.reducer
});

const ReduxCounter = () => {
    const count = useSelector(store.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h3>React Redux</h3>
            <button onClick={()=>dispatch(counterSlice.actions.increment)}>+</button>
            {count}
            <button onClick={()=>dispatch(counterSlice.actions.decrement)}>-</button>
        </div>
    )
}

export {ReduxCounter};
