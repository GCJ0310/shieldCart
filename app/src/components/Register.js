import React, { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"


function Register() {
    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [allergies,setAllergies]=useState('')
    const [username, setusername]=useState('')

    function submit(e) {
        e.preventDefault();
        axios.post("http://localhost:5000/Register", {
            username,
            email, 
            password,
            allergies
        })
        .then(res => {
            console.log(res);
            history("/Login");
        })
        .catch(e => {
            console.log(e);
        });
    }
    
    return (
        <div className="login-box">

            <h1>Register</h1>

            <form onSubmit={submit} className="form" action="POST">
                <input type="text" onChange={(e) => { setusername(e.target.value) }} placeholder="Username"/>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
                <textarea type="text" onChange={(e) => { setAllergies(e.target.value) }} placeholder="Allergeis" />
                <input type="submit"  />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/Login">Login Page</Link>

        </div>
    )
}

export default Register