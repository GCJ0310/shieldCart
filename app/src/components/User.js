import React, { useContext } from "react"
import { Link } from "react-router-dom"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"

function User() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)

  return (
    <>
      {appState.isLoggedIn ? (
        <>
        <div className="btn">
        <h3>Welcome,{appState.username}</h3>
        <Link className="link" to="/">
          <button onClick={() => appDispatch({ type: "logout" })}>
            Logout
          </button>
        </Link>
        </div>
        </>
      ) : (
        <div className="btn">
          <Link className="link" to="/Login">
            <button>Login</button>
          </Link>
          <div>or</div>
          <Link className="link" to="/Register">
            <button>Register</button>
          </Link>
        </div>
      )}
    </>
  )
}

export default User
