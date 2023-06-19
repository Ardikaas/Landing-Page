import Card from "./Card"
import { useEffect, useState } from "react"

const Testimoni = () => {
  const baseUrl = 'https://ardikaas.github.io/simple-api/testi.json'
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(baseUrl)
      result.json().then(result => {
        setData(result)
        console.log(result)
      })
    }
    fetchData();
  }, []);

  const Test = () => {
    return data.map((id, i) => {
      return (
        <div key={i}>
          <Card text={id.text} name={id.name} email={id.email} image={id.image}/>
        </div>
      )
    })
  }

  return(
    <div className="testimoni">
      <div className="testimoni-text">
        <h1>Testimonials</h1>
      </div>
      <div className="carousel">
        <Test />
      </div>
      <div className="element">
        <div className="dot">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </div>
        <div className="arrow">
          <h4 className="left">kiri</h4>
          <h4 className="right">kanan</h4>
        </div>
      </div>
    </div>
  )
}

export default Testimoni