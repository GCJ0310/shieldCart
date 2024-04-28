import React from "react"
import Page from "./Page"
import insta from "../images/insta.png"
import face from "../images/facebook.png"
import twit from "../images/twitter.png"


function Contact() {
  return (
    <>
      <Page title="Contact ">
        <div className="contactcont">
          <div className="container">
            <p>REACH US AT</p>
            <p>
              <br></br>
              Support@kicksup.com <br></br>
              for any technical support<br></br>
              <br></br>
              info@kicksup.com<br></br>
              for more information<br></br>
              <br></br>
              feedback@kicksup.com<br></br>
              to send your feedback<br></br>
              <br></br>
              jobs@kicksup.com<br></br>
              to work with us<br></br>
              <br></br>
            </p>
          </div>
          <div className="con">
            <p className="contactp">stay in touch</p>
          </div>
          <div className="con">
            <img src={twit} alt="" />
            <img src={insta} alt="" />
            <img src={face} alt="" />
          </div>
        </div>
      </Page>
    </>
  )
}

export default Contact
