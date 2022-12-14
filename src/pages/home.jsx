import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import axios from "axios";

const client = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/users"
})

const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [users, setUsers] = useState([]);
    useEffect(() => {
        client.get('?_limit=10').then((response) => {
            setIsLoaded(true)
            setUsers(response.data)
        })
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            <Link to={`user/${user.id}`}>{user.name}</Link>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}
export default Home;