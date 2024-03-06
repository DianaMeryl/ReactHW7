import React from 'react';
import { useDispatch } from 'react-redux';
import { incrementNumber } from '../redux/actions';

export default function Bcomponent() {
    const dispatch = useDispatch();

    const handleIncrement = () => {
    dispatch(incrementNumber());
};

return (
    <div>
        <button onClick={handleIncrement}>Increment</button>
    </div>
);
}

