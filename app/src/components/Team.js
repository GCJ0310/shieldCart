import React from "react"
import pic1 from '../images/zidane.jpg'
import pic2 from '../images/tonikroos.jpg'
import pic3 from '../images/ikercasillas.jpg'
import pic4 from '../images/james.jpg'
import pic5 from '../images/christiano.jpg'
import log1 from '../images/facebook.png'
import log4 from '../images/nba.png'
import log5 from '../images/medium.png'
import log6 from '../images/linkedin.png'
import Page from './Page'

function Team() {
  return (
    <>
    <Page title='Team' >
      <h5 className="teamhead">
        Without bonding and coordination, Every project is a failure. LOOK at
        who makes KICKSUP great :)
      </h5>
      <div className="images">  
        <img className="image" src={pic1} alt="" />
        <img className="image" src={pic2} alt="" />
        <img className="image" src={pic3} alt="" />
        <img className="image" src={pic4} alt="" />
        <img className="image" src={pic5} alt="" />
      </div>

      <div className="textimg">
        <div className="text one">
          <span>Zidane</span>
          <p>Leadership & management</p>
          <div className="logos">
            <img className="logoimg" src={log6} alt="" />
            <img className="logoimg" src={log5} alt="" />
            <img className="logoimg" src={log1} alt="" />
          </div>
        </div>
        <div className="text two">
        <span>Tony Kroos</span>
          <p>Product Developer</p>
          <div className="logos">
            <img className="logoimg" src={log6} alt="" />
            <img className="logoimg" src={log5} alt="" />
            
          </div>
        </div>
        <div className="text three">
        <span>Ikor Casillas</span>
          <p>Marketing Strategy</p>
          <div className="logos">
            
            <img className="logoimg" src={log5} alt="" />
            
          </div>
        </div>
        <div className="text four">
        <span>James</span>
          <p>Product Designer</p>
          <div className="logos">
            
            <img className="logoimg" src={log5} alt="" />
            <img className="logoimg bas" src={log4} alt="" />
            <img className="logoimg" src={log1} alt="" />
          </div>
        </div>
        <div className="text five">
        <span>Christiano</span>
          <p>Financial Operations</p>
          <div className="logos">
            <img className="logoimg" src={log6} alt="" />
            <img className="logoimg" src={log1} alt="" />
          </div>
        </div>
      </div>

      <h5 className="teamlast">
        and You ! :)
      </h5>
      </Page>
    </>
    
  )
}

export default Team
