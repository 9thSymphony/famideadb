import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    /* const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    } */

    const handleSubmit = async () => {
        try {
            const response = await axios.get('http://192.168.254.103:3000/users/add' , {
                params: {
                    "fullname": fullname,
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
            <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" />
            
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            
            <label htmlFor="password">Password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            
            <button type="submit">Sign up</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
