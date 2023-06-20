import image from './assets/logo.png'

const Navbar = () => {
  const btntoggle = document.querySelector('.resicon')
  const btntoggleicon = document.querySelector('.resicon i')
  const accor = document.querySelector('.accordion')

  btntoggle.onclick = function(){
    accor.classList.toggle('open')
    const isOpen = accor.classList.contains('open')

    btntoggleicon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
  }
  return(
    <div class="navbar-con">
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
        </div>
      </div>
      <div className="hamburg">
        <div className="logo">
          <img src={image} alt=""></img>
        </div>
        <div className="kebawah">
            <a href="#about">About</a>
            <a href="*">Help</a>
            <a href="#features">Features</a>
            <a href="*" className="beda">Request Demo</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar;