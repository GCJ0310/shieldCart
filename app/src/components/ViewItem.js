import React, { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import Itemsdata from "./Itemsdata"
import back from "../images/back.png"
import Storerightbar from "./Storerightbar"
import StateContext from "../StateContext"
import star from "../images/star.png"
import chess from "../images/chess.png"
import DispatchContext from "../DispatchContext"

function ViewItem() {
  const navigate = useNavigate()
  const location = useLocation()
  const appState = useContext(StateContext)
  //console.log(appState.Addtocart)
  let id = location.search.substring(4)
  id -= 1
  let [cart, updatecart] = useState([appState.Addtocart])
  useEffect(() => {}, [cart, appState.Addtocart])

  function addcart() {
    const exist = appState.Addtocart.find((x) => {
      console.log(x.id - 1 + " " + id)
      return x.id - 1 === id
    })
    console.log(exist)
    if (exist) {
      appState.Addtocart = appState.Addtocart.map((x) =>
        x.id - 1 === id ? { ...exist, qty: (exist.qty += 1) } : x
      )
      updatecart(appState.Addtocart)
      console.log(appState.Addtocart)
    } else {
      appState.Addtocart.push({ ...Itemsdata[id], qty: 1 })
      updatecart(appState.Addtocart)
    }
  }
  console.log(appState.allergies)
  const allergiesarray = appState.allergies.split(',').map(item => item.trim());
  if(allergiesarray.length===0)
    allergiesarray.push(appState.allergies)
  console.log(allergiesarray)
  return (
    <>
      <div className="viewitemshowbox">
        <div className="innerviewitemshowbox">
          <div>
            <div className="backbtnviewitem">
              <button
                className="backbtn"
                onClick={() => {
                  navigate("/store")
                }}
              >
                <img src={back} alt="" />
              </button>
              <p>Your Design Space</p>
            </div>

            {/* <h1>{Itemsdata[id].title}</h1> */}
            <div className="shoeviewdiv">
              <img
                className="shoeview"
                src={Itemsdata[id].img}
                alt="not available :("
                width={30}
                height={40}
              />
            </div>
            <div className="starrateviewitem">
              <p className="textrate">Rate product</p>
              <img src={star} alt="" />
            </div>
          </div>

          {/* <div className="subshoeviewdiv">
            <div className="imgdivsviewitem">
              <img className="subshoeview" src={Itemsdata[id].shoeimg} alt="" />
            </div>
            <div className="imgdivsviewitem">
              <img className="subshoeview" src={Itemsdata[id].shoeimg} alt="" />
            </div>
            <div className="imgdivsviewitem">
              <img className="subshoeview" src={Itemsdata[id].shoeimg} alt="" />
            </div>
          </div> */}
          <div className="rightpanelviewitem">
            <p className="viewtitle">{Itemsdata[id].title}</p>
            <p className="tagp">by ShieldCart</p>
            <br></br>
            <img className="" src={star} alt="" />
            <p className="tagp"><b>Ingredients :- </b> {Itemsdata[id].ingredients.map((ingredient,index)=>{return <li key={index}>{ingredient}</li>})} </p>
            <br/>
            <p className="tagp"><b>Allergic to :- <br/></b>{allergiesarray.map((allergy,index)=>{return <li key={index}>{allergy}</li>})}</p>
            <br></br>
            <p>Rs. {Itemsdata[id].price}/-</p>
            <p className="tagp">
              Get an exclusive discount 20% off shopping with HDFC bank
            </p>
            <br></br>
            <br></br>
            {/* <div className="varietyviewitem">
              <div className="varietynameviewitem">
                <p>Front</p>
                <p>Middle</p>
                <p>Back</p>
                <p>Side</p>
                <p>Size</p>
              </div>
              <div className="varietypicviewitem">
                <div className="varietyselect">
                  <img className="chesspic" src={chess} alt="" />
                  <img className="chesspic" src={chess} alt="" />
                  <img className="chesspic" src={chess} alt="" />
                </div>
                <div className="varietyselect">
                  <img className="chesspic" src={chess} alt="" />
                  <img className="chesspic" src={chess} alt="" />
                  <img className="chesspic" src={chess} alt="" />
                </div>
                <div className="varietyselect">
                  <img className="chesspic" src={chess} alt="" />
                  <img className="chesspic" src={chess} alt="" />
                  <img className="chesspic" src={chess} alt="" />
                </div>
                <div className="varietyselect">
                  <img className="chesspic" src={chess} alt="" />
                  <img className="chesspic" src={chess} alt="" />
                  <img className="chesspic" src={chess} alt="" />
                </div>
                <div className="varietyselect">
                  <div>
                    <p>6</p>
                  </div>
                  <div>
                    <p>7</p>
                  </div>
                  <div>
                    <p>8</p>
                  </div>
                  <div>
                    <p>9</p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="divbtnviewitems">
          <button className="viewitemsbtn">Share design</button>
          <button onClick={addcart} className="viewitemsbtn">
            Add to cart
          </button>
        </div>
      </div>

      <Storerightbar />
    </>
  )
}

export default ViewItem
