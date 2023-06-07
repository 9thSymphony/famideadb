import axios from "axios";
import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    /* const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } */

    const handleSubmit = async () => {
        try {
            const response = await axios.get('http://192.168.254.103:3000/users' , {
                params: {
                    "email": email,
                    "password": password 
                }
            });

            Alert.alert(response.data);
        } catch (error) {
            Alert.alert("An error has occured" + error);
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="yourmail@gmail.com" id="email" name="email" />
                
                <label htmlFor="password">Password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}