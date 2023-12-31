import image from './assets/logo.png'
import React, {useState, useEffect, useRef} from 'react'


const Navbar = () => {
  const [open, setOpen] = useState(false);
  let menuRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if(!menuRef.current.contains(e.target)){
        setOpen(false)
        console.log(menuRef.current)
      }
    }
    document.addEventListener("mousedown", handler)
    return() => {
      document.removeEventListener("mousedown", handler)
    }
  })
  return(
    <div className="navbar-con">
      <div className="normal">
        <div className="left">
          <div class="logo">
            <img src={image} alt=""></img>
          </div>
          <div class="navbar-menu">
            <a href="#about">About</a>
            <a href="*">Help</a>
            <a href="#features">Features</a>
          </div>
        </div>
        <div className="right">
          <a href="*">Request Demo</a>
        </div>
      </div>
      <div className="hamburg">
        <div className="logo-ham">
          <img src={image} alt=""></img>
          <i class="fa-solid fa-bars" onClick={() => {setOpen(!open)}}></i>
        </div>
        <div className='lambang' ref={menuRef}>
          <div className={`kebawah ${open? 'active' : 'inactive'}`}>
          <a href="#about">About</a>
          <a href="*">Help</a>
          <a href="#features">Features</a>
          <a href="*" className="beda">Request Demo</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;