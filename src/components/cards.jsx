
import cardfront from "../images/bg-card-front.png"
import cardback from "../images/bg-card-back.png"
import cardlogo from "../images/card-logo.svg"


function Cards({ name, number, month, year, cvc }) {
  return (

    <div>

      <div className="cardfront"><img className="mobilesize" width="350px" alt="" src={cardfront}></img>
        <div className="cardlogo"><img alt="" src={cardlogo}></img></div>
        <div className="cardname">{name === undefined || name.length < 1 ? "JANE APPLESEED" : name.toUpperCase()}</div>
        <div className="number">{number === undefined || number.length < 1 ? "0000 0000 0000 0000" : number}</div>
        <div className="expirationdate">{month === undefined || month.length < 1 ? "00" : month}/{year === undefined || year.length < 1 ? "00" : year}</div>

      </div>
      <div className="cardback"><img alt="" width="350px" src={cardback}></img>
        <div className="cardbackcvc">{cvc === undefined || cvc.length < 1 ? "000" : cvc}</div>
      </div>
    </div>

  )
}

export default Cards;