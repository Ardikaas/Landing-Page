const Fcard = (props) => {
  return (
    <div className={`fecard ${props.className}`}>
      <div className="fecard-img">
        <img src={props.img} alt=""/>
      </div>
      <div className="fecard-text">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <a href="*">Learn more</a>
      </div>
    </div>
  )
}

export default Fcard;