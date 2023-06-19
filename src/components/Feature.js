import Fcard from "./Fcard";
import imgsearch from "./assets/search.png"
import imgservices from './assets/services.png'
import imgsecurity from './assets/security.png'
import imgimprove from './assets/improve.png'

const Features = () => {
  const searchtit = "Search Data"
  const searchtex = "Don't worry if your data is very large, the Data Warehouse provides a search engine, whis is useful for making it easier to find data effectively saving time"
  const servicestit = "Customer Support"
  const servicestex = "We have a dedicated support team ready to assist you with any questions or requests related to our services. From general inquiries to specific requests, we provide friendly and professional guidance and solutions. "
  const securitytit = "Security Code"
  const securitytex = "Relax and let us handle the security of your data. Our storage service offers robust security features, including encryption and advanced monitoring systems. Focus on what matters while we keep your data safe."
  const improvetit = "Continuous Improvements"
  const improvetex = "We never tire in our pursuit of continuous improvement and feature enhancement to ensure the comfort, security, and additional benefits for our users. Your satisfaction is our priority. "

  return (
    <div className="features">
      <div className="features-text">
        <h1>Features</h1>
        <p>Some of features and advantages that we provide for those of you who store data in this Data Warehouse</p>
      </div>
      <div className="fecard-container">
        <div className="fecardres-con">
          <Fcard img={imgsearch} className="blue" title={searchtit} text={searchtex}/>
          <Fcard img={imgsecurity} className="pink" title={securitytit} text={securitytex}/>
        </div>
        <div className="fecardres-con">
          <Fcard img={imgservices} className="pink" title={servicestit} text={servicestex}/>
          <Fcard img={imgimprove} className="blue" title={improvetit} text={improvetex}/>
        </div>
      </div>
    </div>
  )
}

export default Features;