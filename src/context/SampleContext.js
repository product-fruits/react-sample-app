import React from 'react';

const SampleContext = React.createContext({
    val: 0,
    tourHit: 0,
    increment: () => { },
    incrementTourHit: () => { }
});

export default SampleContext;