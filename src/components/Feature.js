import Fcard from "./Fcard";
import imgsearch from "./assets/search.png"

const Features = () => {
  const searchtit = "Search Data"
  const searchtex = "Don't worry if your data is very large, the Data Warehouse provides a search engine, whis is useful for making it easier to find data effectively saving time"
  return (
    <div className="features">
      <div className="features-text">
        <h1>Features</h1>
        <p>Some of features and advantages that we provide for those of you who store data in this Data Warehouse</p>
      </div>
      <div className="fecard-container">
        <div className="fecardres-con">
          <Fcard img={imgsearch} className="blue" title={searchtit} text={searchtex}/>
          <Fcard img={imgsearch} className="pink" title={searchtit} text={searchtex}/>
        </div>
        <div className="fecardres-con">
          <Fcard img={imgsearch} className="pink" title={searchtit} text={searchtex}/>
          <Fcard img={imgsearch} className="blue" title={searchtit} text={searchtex}/>
        </div>
      </div>
    </div>
  )
}

export default Features;