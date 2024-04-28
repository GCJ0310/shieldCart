import React,{useContext, useEffect} from "react"
import cart from "../images/cart.png"
import home from "../images/home.png"
import date from "../images/date.png"
import Cartitems from "./Cartitems"
import StateContext from "../StateContext"


function Rightbar() {
  const appState = useContext(StateContext)
  useEffect(()=>{

  },[appState.Addtocart])
  return (
    <>
      <div className="rightbar">
        <div className="rightpanel1">
          <h4>CART</h4>
          <img className="cartic" src={cart} alt="" />
        </div>
        <div className="cartitems">
          {appState.Addtocart.length === 0 && <div>Nothing to show</div>}
          {appState.Addtocart.length !== 0 && <Cartitems/>}
        </div>
        <br></br>
        <div className="address">
          <div className="item1">
            <img className="homeic" src={home} alt="" />
            <button className="sortbtn">
              <p>Home</p>
            </button>
          </div>
          <div className="item1">
            <img className="homeic" src={date} alt="" />
            <button className="sortbtn">
              <p>Select Date</p>
            </button>
          </div>
        </div>
        <div className="panel6">
          <button className="applyfilter order">order now</button>
        </div>
      </div>
    </>
  )
}

export default Rightbar
