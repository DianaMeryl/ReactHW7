import React from 'react';
import Bcomponent from './Bcomponent';
import { useSelector } from 'react-redux';

const Acomponent = () => {
    const number = useSelector(state => state.number);
    return (
    <div>
        <Bcomponent />
        <p>Current number: {number}</p>
    </div>
    );
};

export default Acomponent;