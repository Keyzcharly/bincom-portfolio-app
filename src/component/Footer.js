import React from "react"
import logo1 from "./pic/logo.png"

const Footer = () => {
  return (
    <>
      <footer>
        <div className='conatiner text-center top'>
          <div className='img'>
            <img style={{height: '50px'}} src={logo1} alt='logo' />
          </div>
          <p>© 2023. All rights reserved by ViralWeb.biz.</p>
        </div>
      </footer>
    </>
  )
}

export default Footer