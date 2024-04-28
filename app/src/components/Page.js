import React, { useEffect } from "react"

function Page(props) {
    useEffect(()=>{
        document.title=`${props.title} | E-Commerce`
    },[props.title])
  return (
    <>
      {props.children}
    </>
  )
}

export default Page