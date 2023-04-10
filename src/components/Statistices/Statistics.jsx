import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Statistics = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <h2>this is stsistecs page</h2>
        </div>
    );
};

export default Statistics;