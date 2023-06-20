const Footer = () => {
  return (
    <footer>
      <div className="first-section">
        <div>
          <h2>Try For Free</h2>
          <p>Lorem ipsum dolor sit amet</p>
        </div>
        <div className="button-wrap">
          <button>Learn More</button>
          <button>Request Demo <i class='bx bx-right-arrow-alt'></i></button>
        </div>
      </div>
      <div className="second-section">
        <div className="heading">
          <div className="Data">
            <h2>DataWarehouse</h2>
            <p className="first-text">warehouse society,<br /> 234 bahagia ave street PRBW 29281</p>
            <p className="second-text">info@warehouse.project 1-232-3434 (main)</p>
          </div>
          <div className="about">
            <h2>About</h2>
            <a href="*">Profile</a>
            <a href="*">Features</a>
            <a href="*">careers</a>
            <a href="*">DW News</a>
          </div>
          <div className="Help">
            <h2>Help</h2>
            <a href="*">Support</a>
            <a href="*">Sign Up</a>
            <a href="*">Guide</a>
            <a href="*">Reports</a>
            <a href="*">Q&A</a>
          </div>
          <div className="sosmed">
            <h2>Sosial Media</h2>
            <div class="icon">
              <a href="https://www.instagram.com/"><i class='bx bxl-instagram'></i></a>
              <a href="https://twitter.com/?lang=id"><i class='bx bxl-twitter'></i></a>
              <a href="http://facebook.com"><i class='bx bxl-facebook'></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="last-section">
        <p>&#169datawarehouse&#8482, 2020 All rights reserved <br />
          Company Registrasion Number 21479</p>
      </div>
    </footer>
  )
}

export default Footer