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
  const appDispatch = useContext(DispatchContext)
  let id = location.search.substring(4)
  id -= 1
  const allergiesarray = appState.allergies
    .split(",")
    .map((item) => item.trim())
  if (allergiesarray.length === 0) allergiesarray.push(appState.allergies)
  // console.log(allergiesarray)


  function addcart() {
    const ingredientsarray = Itemsdata[id].ingredients.map((ingredient) =>
      ingredient.toLowerCase()
    )
    const newallergiesarray = allergiesarray.map((allergy) =>
      allergy.toLowerCase()
    )
    // checking for allergies match
    const hasAllergies = ingredientsarray.some((ingredient) =>
      allergiesarray.some(
        (allergy) =>
          ingredient.includes(allergy) || allergy.includes(ingredient)
      )
    )

    if (hasAllergies) {
      // Dispatch an action to mark the item as allergic
      Itemsdata[id].isAllergic=true;
      
      console.log("Allergies match")
    }
    // Finding if the item exists in the cart
    const itemexistincart = appState.Addtocart.find((x) => x.id - 1 === id)

    if (itemexistincart) {
      // If the item exists, create a new array with the updated quantity
      const updatedCart = appState.Addtocart.map((x) =>
        x.id - 1 === id ? { ...x, qty: x.qty + 1 } : x
      )

      // Dispatch an action to update the cart
      appDispatch({ type: "updateCart", value: updatedCart })
    } else {
      // If the item doesn't exist, add it to the cart with quantity 1
      appDispatch({
        type: "addIteminCart",
        value: { ...Itemsdata[id], qty: 1 },
      })
    }
  }

  return (
    <>
      <div className="viewitemshowbox">
        <div className="innerviewitemshowbox">
          <div>
            <div className="backbtnviewitem">
              <button
                className="backbtn"
                onClick={() => {
                  navigate("/Store")
                }}
              >
                <img src={back} alt="" />
              </button>
              <p>Back</p>
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
            <p className="tagp">
              <b>Ingredients :- </b>{" "}
              {Itemsdata[id].ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
              })}{" "}
            </p>
            <br />
            <p className="tagp">
              <b>
                Allergic to :- <br />
              </b>
              {allergiesarray.map((allergy, index) => {
                return <li key={index}>{allergy}</li>
              })}
            </p>
            <br></br>
            <p>Rs. {Itemsdata[id].price}/-</p>
            <p className="tagp">
              Get an exclusive discount 20% off shopping with HDFC bank
            </p>
            <br></br>
            <br></br>
            <div className="btn-locate"><a href="https://app.mappedin.com/map/6624e55b3d4f85efee0e485a?floor=m_a0411ad34edee4d4" target="_blank"><button>Locate</button></a></div>
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
