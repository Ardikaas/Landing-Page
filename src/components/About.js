import image from '../components/assets/about.png'

const About = () => {
  return (
    <div className="about-section">
      <div className="about-img">
        <img src={image} alt=""/>
      </div>
      <div className='about-text'>
        <h1>We are high-level data storage bank</h1>
        <p>The place to store various data that you can access at any time thrpough the internet and where you can carry it. This very flexible storage area has high level of security. To enter into your own data you must enter the password that you created when you registered in this Data Warehouse</p>
      </div>
    </div>
  )
}

export default About;