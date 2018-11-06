import React, { useReducer } from 'react';
import './Counter.css';

function reducer (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + action.value;
    case 'DECREMENT':
      return state - action.value;
    default:
      return state;
  }
}

const increment = (value = 1) => ({ type: 'INCREMENT', value });
const decrement = (value = 1) => ({ type: 'DECREMENT', value });

export default function Counter () {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="Counter">
      <div className="label">
        Count: {count}
      </div>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(increment())}>increment</button>
    </div>
  );
}
