const Card = (props) => {
  return(
    <div className="card">
      <div className="card-img">
        <img src={props.image} alt=""/>
      </div>
      <div className="card-name">
        <h1>{props.name}</h1>
        <h5>{props.email}</h5>
      </div>
      <div className="card-text">
        <p>{props.text}</p>
      </div>
    </div>
  )
}

export default Card;