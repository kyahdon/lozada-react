{/*import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';

const Dashboard = () => {

    const [user, setUser] = useState(null);
    const navigate = useNavigate();


    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = JSON.parse(localStorage.getItem('token'))
                setUser(response.data);

            } catch (error) {
                console.error('Failed to fetch user', error);
                navigate("/login");
            }
        };

        fetchUser();
    }, []);
    
    
    const handleLogout = async () => {
        
        try {
            localStorage.removeItem('token');
            NavigationPreloadManager("/login");
        
        } catch (error) {
            console.error('Logout failed', error);
        }
    };
    
    return (
        <div>
            <h3>Welcome, {user ? user.user.name : 'User'}<button onClick={handleLogout}>Logout</button></h3><br/>
            
            <div classname="container">
                
                {/* <Candidate/> */}
                
{/*            </div>
            
        </div>
    );
};

export default Dashboard; */}