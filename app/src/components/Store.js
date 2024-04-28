import React, { useEffect, useState } from "react"
import filter from "../images/filter.png"
import search from "../images/search.png"
import Storerightbar from "./Storerightbar"
import Page from "./Page"
import Itemsdata from "./Itemsdata"
import Itemcard from "./Itemcard"


function Store() {
  let [lim, setlim] = useState("0")
  let [min, setmin] = useState("0")
  let [max, setmax] = useState("0")
  let [category, setcategory] = useState("")
  let [applies,setapply]=useState(false);
  useEffect(() => {
    setmin(parseInt(lim))
    setmax(parseInt(lim.substring(5)))
  }, [lim])
  useEffect(() => {}, [category])
  function applychanges()
  {
    setapply(true)
  }
  let acprice
  return (
    <>
      <Page title="Store">
        <div className="leftbar">
          <div className="panel1">
            <h4>FILTERS</h4>
            <img className="filterimg" src={filter} alt="" />
          </div>
          <div className="panel2">
            <br></br>
            <h4>Cost</h4>
            <br></br>
            <input
              onChange={(e) => {
                setlim(e.target.value)
              }}
              className="costfil1"
              type="radio"
              name="price_filter"
              value={"1500-4000"}
            />
            &nbsp;Rs 1500-4000<br></br>
            <input
              onChange={(e) => {
                setlim(e.target.value)
              }}
              className="costfil2"
              type="radio"
              name="price_filter"
              value={"4001-7000"}
            />
            &nbsp;Rs 4001-7000<br></br>
            <input
              onChange={(e) => {
                if (e.target.checked === true) setlim(e.target.value)
              }}
              className="costfil3"
              type="radio"
              name="price_filter"
              value={"7001+"}
            />
            &nbsp;Rs 7001+
          </div>
          <br></br>
          <div className="panel3">
            <h4>Colour</h4>
            <div className="boxes">
              <button className="col btn1"></button>
              <button className="col btn2"></button>
              <button className="col btn3"></button>
              <button className="col btn4"></button>
              <button className="col btn5"></button>
            </div>
          </div>
          <br></br>
          <div className="panel4">
            <h4>Design templates</h4>
            <br></br>
            <input className="designfil1" type="radio" name="design" /> 2
            <br></br>
            <input className="designfil2" type="radio" name="design" /> 3
            <br></br>
            <input className="designfil3" type="radio" name="design" /> 4+
          </div>
          <br></br>
          <div className="panel5">
            <h4>Type</h4>
            <br></br>
            <input
              onChange={(e) => {
                if (e.target.checked === true) 
                {
                  setcategory(e.target.value)
                }
              }}
              className="typefil1"
              type="radio"
              name="category"
              value="Loafers"
            />{" "}
            Loafers<br></br>
            <input
              onChange={(e) => {
                if (e.target.checked === true) 
                {
                  setcategory(e.target.value)
                }
              }}
              className="typefil1"
              type="radio"
              name="category"
              value="Sneakers"
            />{" "}
            Sneakers<br></br>
          </div>
          <br></br>
          <div className="panel6">
            <button onClick={applychanges} className="applyfilter">apply</button>
          </div>
        </div>

        {/* centerbar */}

        <div className="centerbar">
          <div className="cenpanel1">
            <h4>SHOES</h4>
            <div className="imagesic">
              <button className="sbtn">
                <img className="searchicon" src={search} alt="" />
              </button>{" "}
              &nbsp;
              <button className="sortbtn">Sort</button>
            </div>
          </div>
          <br></br>
          <br></br>
          <div className="imges">
            {Itemsdata.map((val, pos) => {
              acprice = parseInt(val.price)
              if (isNaN(min)) {
                setmin(0)
              }
              if (isNaN(max)) {
                setmax(10000)
              }
              const cat = val.category

              if ((acprice >= min) & (acprice <= max)) {
                if (cat === category || category === "") {
                  return (
                    <Itemcard
                      id={val.id}
                      key={pos}
                      title={val.title}
                      price={val.price}
                      img={val.img}
                    />
                  )
                } else return ""
              } else {
                return ""
              }
            })}
          </div>
        </div>

        {/* right bar showing cart */}

        <Storerightbar/>
      </Page>
    </>
  )
}

export default Store
