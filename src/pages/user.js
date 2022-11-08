import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
var params = useParams()
return(
        <div>
            <h1>User Details</h1>
            ID: {params.id}
        </div>
    );
}
export default User;