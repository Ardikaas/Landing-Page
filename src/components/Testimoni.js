import Card from "./Card"
import image from "../components/assets/icebear.jpg"
// import { getTesti } from "./api.js"
// import { useEffect, useState } from "react"

const Testimoni = () => {
  // const [testi, setTesti] = useState([])
  // useEffect(() => {
  //   getTesti().then((result) => {
  //     setTesti(result)
  //   })
  // }, [])
  // console.log({testimonial : testi})

  const name = "Udin Selamet"
  const email = "udinselametgmail.com"
  const text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod minus debitis deserunt maiores maxime cum, commodi doloremque dolorem quo quis voluptates numquam nobis quidem fugit, sapiente corporis ipsa veritatis ipsum."
  return(
    <div className="testimoni">
      <div className="testimoni-text">
        <h1>Testimonials</h1>
      </div>
      <div className="carousel">
        <Card text={text} name={name} email={email} image={image}/>
        <Card text={text} name={name} email={email} image={image}/>
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