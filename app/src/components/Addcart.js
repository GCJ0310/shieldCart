import React from "react"
import { useContext } from "react"
import Itemsdata from "./Itemsdata"
import StateContext from "../StateContext"
import { useLocation } from "react-router-dom"

function Addcart() {
  const location = useLocation()
  let id = location.search.substring(4)
  const appState = useContext(StateContext)

  function addcart() {
    const exist = appState.Addtocart.find((x) => x.id === id)
    console.log(exist)
    if (exist) {
      appState.Addtocart.map((x) =>
        x.id === id ? { ...exist, qty: (exist.qty += 1) } : x
      )
    } else {
      appState.Addtocart.push({ ...Itemsdata[id - 1], qty: 1 })
    }
  }
  return (
    <>
      <button onClick={addcart} className="applyfilter">
        Add to Cart
      </button>
    </>
  )
}

export default Addcart
