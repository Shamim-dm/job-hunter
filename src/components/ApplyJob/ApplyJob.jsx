import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ApplyJob = () => {
    const data = useLoaderData()
    let jobs = useParams()
    console.log(jobs.id)
    console.log(data)
    return (
        <div>
            sdklnd
        </div>
    );
};

export default ApplyJob;