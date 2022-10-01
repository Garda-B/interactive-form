
import icon from "../images/icon-complete.svg"


function Submitsuccess({displayon}) {


    return (

            <div  style={{textAlign: "center"}} className={`${displayon} formwrapper`} >
                    <div><img src={icon} alt=""></img></div>
                    <div style={{fontSize: "18px", letterSpacing:"2px"}}>THANK YOU!</div>
                    <div style={{color: "hsl(279, 6%, 55%)"}}>We've added your card details</div>
                    <button className="button">Continue</button>
            </div>

    )
}


export default Submitsuccess;