import React, { useEffect, useState,useContext }  from "react"
import {ImCross} from 'react-icons/im'
import StateContext from "../StateContext"


function CartItem() {
  const appState = useContext(StateContext)
  let [cart,setcart]=useState(appState.Addtocart)
  useEffect(()=>{

  },[cart,appState.Addtocart])
  function handlecross(id)
  {
    //console.log(id + " recieved id")
    appState.Addtocart= appState.Addtocart.filter((x)=> x.id!==id)
    setcart(appState.Addtocart)
    //console.log(appState.Addtocart)
  }
  return (
    <>
      {appState.Addtocart.map((x, i) => (
        
        <div key={i} className="itemblock" id="i">
        <div>
        <ImCross onClick={()=>{handlecross(x.id)}} className="crossicon"/>
        </div>
          <div className="">{x.title}</div>
          <div>
          {x.qty} x {" "} {x.price}
          </div>
        </div>
        
      ))}
      
    </>
  )
}

export default CartItem
