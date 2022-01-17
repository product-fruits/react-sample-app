import React from 'react';

const SampleContext = React.createContext({
    val: 0,
    increment: () => { },
});

export default SampleContext;