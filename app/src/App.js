import React from "react"
import { useImmerReducer } from "use-immer"
import Navbar from "./components/Navbar"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Store from "./components/Store"
import Team from "./components/Team"
import TheJourney from "./components/TheJourney"
import Contact from "./components/Contact"
import StateContext from "./StateContext"
import DispatchContext from "./DispatchContext"
import ViewItem from "./components/ViewItem"
import Login from "./components/Login"
import Register from "./components/Register"
import almond from "./images/almond.png"
import apple from "./images/apple.png"
import artichoke from "./images/artichoke.png"
import apricot from "./images/apricot.png"
import eggs from "./images/eggs.png"
import yogurt from "./images/yogurt.png"
import fruits from "./images/fruits.png"
import pomefruit from "./images/pomefruit.png"
import buttermilk from "./images/buttermilk.png"

function App() {
  const init = {
    username: "",
    allergies: "",
    isLoggedIn: false,
    Cartitemsnum: 0,
    Addtocart: [],
  }
  function MyReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.isLoggedIn = true
        return
      case "logout":
        draft.isLoggedIn = false
        return
      case "setUsername":
        draft.username = action.value
        return
      case "setalleries":
        draft.allergies = action.value
        return
      case "cartadd":
        draft.Cartitemsnum += 1
        return
      case "addIteminCart":
        draft.Addtocart = [...draft.Addtocart, action.value]
        return
      case "updateCart":
        draft.Addtocart = action.value
        return
      case "markAsAllergic": {
        // Find the index of the item with the given id
        const index = draft.Addtocart.findIndex((item) =>{  console.log(item.id , action.id);return (  item.id === action.id) })
        // console.log(index)
        if (index !== -1) {
          // If item found, set isAllergic to true
          console.log(draft.Addtocart[index])
          draft.Addtocart[index].isAllergic = true
        }
        return
      }
    }
  }

  const [state, dispatch] = useImmerReducer(MyReducer, init)
  return (
    <>
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Router>
            <Navbar isOpen={true} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/TheJourney" element={<TheJourney />} />
              <Route exact path="/Team" element={<Team />} />
              <Route exact path="/Store" element={<Store />} />
              <Route exact path="/Contact" element={<Contact />} />
              <Route exact path="/ViewItems" element={<ViewItem />} />
              <Route exact path="/Login" element={<Login />} />
              <Route exact path="/Register" element={<Register />} />
            </Routes>
          </Router>
        </DispatchContext.Provider>
      </StateContext.Provider>
    </>
  )
}

export default App
