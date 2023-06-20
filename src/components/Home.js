import image from '../components/assets/home.png'

const Home = () => {
  return (
    <div className="home">
      <div className="home-text">
        <h1>Save your data storage here.</h1>
        <p>
          Data Warehouse is a data storage area that has been tested for security, we ensures data security through robust encryption, proactive threat monitoring, and regular backups. Enjoy a seamless and trustworthy storage experience with full privacy control. Join us now for convenient and secure online storage.
        </p>
        <a href="*">
          <button>Learn more</button>
        </a>
      </div>
      <div className='home-img'>
        <img src={image} alt=""></img>
      </div>
    </div>
  )
}

export default Home;