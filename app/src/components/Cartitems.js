import React, { useEffect, useState, useContext } from "react"
import { ImCross } from "react-icons/im"
import { useLocation, useNavigate } from "react-router-dom"
import StateContext from "../StateContext"
import Itemsdata from "./Itemsdata"

function CartItem() {
  const appState = useContext(StateContext)
  let [cart, setcart] = useState(appState.Addtocart)
  useEffect(() => {}, [cart, appState.Addtocart])
  const location = useLocation()
  let id = location.search.substring(4)
  id -= 1
  function handlecross(id) {
    //console.log(id + " recieved id")
    appState.Addtocart = appState.Addtocart.filter((x) => x.id !== id)
    setcart(appState.Addtocart)
    console.log(appState.Addtocart)
  }
  return (
    <>
      {appState.Addtocart.map((x, i) => {
        const itemStyle = x.isAllergic===true ? {color:'red'} : {color:'black'}
        console.log(x)
        return (  
          <div key={i} style={itemStyle} className="itemblock" id={`item-${i}`}>
            <div>
              <ImCross
                onClick={() => handlecross(x.id)}
                className="crossicon"
              />
            </div>
            <div>{x.title}</div>
            <div>
              {x.qty} x {x.price}
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CartItem
