{/*import React, {useEffect, useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [user, setUser] = useState(null);


    useEffect(() => {
        const fetchUser = async () => {
            try {

                const response = JSON.parse(localStorage.getItem('token'))
                setUser(response.data);

                navigate("/dashboard");

            } catch (error) {
                console.error('Failed to fetch user', error);

                navigate("/login");
            }
        };

        fetchUser();
    }, []);
    
    
    const handleLogin = async (e) => {
        try {
            const response = await axios.post('https://lozadaproject.000webhostapp.com/main/successlogin', {
                email,
                password,
            });
            
            localStorage.setItem("token",JSON.stringify(response));
            navigate("/dashboard");
        
        } catch (error) {
            console.error('Login failed', error);
        }
    };
    
    return (
        <>
            <div className="container">
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={8} lg={6} xs={12}>
                       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                       <button onClick={handleLogin}>Login</button>
                    </Col>
                </Row>
            </div>
        </>
    );
};

export default Login;*/}