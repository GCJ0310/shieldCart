import React, { useContext, useEffect } from "react"
import DispatchContext from "../DispatchContext"
import StateContext from "../StateContext"
function Cartnum() {
  const appDispatch = useContext(DispatchContext)
  const appState = useContext(StateContext)
  useEffect(()=>{
    appDispatch({type:"noitems"})
  },[appDispatch])
  useEffect(() => {
    if (appState.Count === 0) {
      appDispatch({ type: "addcartclose" })
    }
  }, [appDispatch, appState.Count])
  return (
    <>
      <button
        onClick={() => {
          appDispatch({ type: "countDec" })
        }}
        className="btndec"
      >
        <h3> - </h3>
      </button>
      <h3>{appState.Count}</h3>
      <button
        onClick={() => {
          appDispatch({ type: "countInc" })
        }}
        className="btninc"
      >
        <h3> + </h3>{" "}
      </button>
    </>
  )
}

export default Cartnum
