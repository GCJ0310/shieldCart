import React from "react"
import { Link } from "react-router-dom"
import pic from "../images/websitelogo.png"
import User from "./User"


function Navbar() {

  return (
    <>
      <div className="items">
        <img className="logo" src={pic} alt="" />
        <ul className="navbar">
          <Link className="link" to="/">
            <li> HOME  </li>
          </Link>
          <Link className="link" to="/TheJourney">
            <li> THE JOURNEY </li>
          </Link>
          <Link className="link" to="/Team">
            <li> TEAM </li>
          </Link>
          {/* <Link className="link" to="/Store">
            <li> STORE </li>
          </Link> */}
          <Link className="link" to="/Contact">
            <li> CONTACT </li>
          </Link>
        </ul>
        <User />
      </div>
    </>
  )
}

export default Navbar
