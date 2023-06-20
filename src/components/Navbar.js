import image from './assets/logo.png'

const Navbar = () => {
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
          <i class="fa-solid fa-bars"></i>
        </div>
        <div className="lambang">
          <div className="kebawah">
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