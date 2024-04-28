import React, { useEffect,useContext, useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"


function Login() {

    const history=useNavigate();

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const appDispatch = useContext(DispatchContext)

    async function submit(e){
        e.preventDefault();

        try{

             axios.post("http://localhost:5000/Login",{
                email,password
            })
            .then(res=>{
                console.log(res.data)
                if(res.data.message==="success"){
                     history("/Store")
                     appDispatch({type:"login"})
                     appDispatch({type:"setUsername" ,value:res.data.user.username})
                     appDispatch({type:"setalleries" ,value:res.data.user.allergies})
                     
                }
                else if(res.data ==="notexist"){
                    alert("User have not sign up")
                }
            })
            .catch(e=>{
                alert("wrong details")
                console.log(e);
            })

        }
        catch(e){
            console.log(e);

        }

    }


    return (
        <div className="login-box">

            <h1>Login</h1>

            <form onSubmit={submit} className="form" action="POST">
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
                <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
                <input type="submit"  />

            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/Register">Signup Page</Link>

        </div>
    )
}

export default Login