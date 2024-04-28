import React from "react"
import star from "../images/star.png"
import { useNavigate } from "react-router-dom"
function Itemcard({ price, id, title,img }) {
  const navigate = useNavigate()
 
  return (
    <>
      <div>
        <div className="shoesimg">
          <button
            onClick={() => {
              navigate(`/ViewItems?id=${id}`)
            }}
          >
            <img className="shoes" src={img} alt="" />
          </button>
        </div>
        <div>
          <h5>{title}</h5>
        </div>
        <div className="priceshoe">
          <div className="pricetagitemcard">
            <h6>{price}</h6>
            <img className="star" src={star} alt="" />
          </div>
          <br></br>
        </div>
      </div>
    </>
  )
}

export default Itemcard
