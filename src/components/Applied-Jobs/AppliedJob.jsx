import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const AppliedJob = ({job}) => {
    const data = useLoaderData()
    console.log(job)
    let {id} = useParams()
    console.log(id)
    
    return (
        <div>
            <h2>this is applied joob page</h2>
        </div>
    );
};

export default AppliedJob;