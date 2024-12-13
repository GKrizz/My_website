import React, { useEffect, useState } from 'react';
import './visitorCounter.css';


const VisitorCounter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch('https://api.countapi.xyz/hit/yourwebsite/visits')
            .then(res => res.json())
            .then(data => setCount(data.value));
    }, []);

    // return <p style={{ textAlign: 'center', fontWeight: 'bold' }}>Visitor Count: {count}</p>;
    return <p className="visitor-counter">Visitor Count: {count}</p>;

};

export default VisitorCounter;
