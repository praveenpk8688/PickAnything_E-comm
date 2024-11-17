
import "../Components/Css/Colorcards.css"
import { IoMdCar } from "react-icons/io";
import { BsFillCreditCardFill } from "react-icons/bs";
import { IoShieldHalfOutline } from "react-icons/io5";
import { IoHeadset } from "react-icons/io5";

// import Card from 'react-bootstrap/Card';
function Colorcards() {
  return (
    <div className='colorcard-container d-flex justify-content-center'>
      <div className="colorcard" >
      <div className="card-body card1">
      <IoMdCar className="card-icon" />
      <h6 className="card-title ct card1">Free Shipping</h6>
      <p className="card-text ctt card1">Exercitationem possimus aliquam similique!</p>
    </div>
    </div>

    <div className="colorcard" >
      <div className="card-body card2">
      <BsFillCreditCardFill  className="card-icon"/>
      <h5 className="card-title ct card2">Safe Payment</h5>
      <p className="card-text ctt card2">Lorem ipsum dolor sit amet consectetu.</p>
    </div>
    </div>

    <div className="colorcard" >
      <div className="card-body card3">
      <IoShieldHalfOutline  className="card-icon"/>
      <h5 className="card-title ct card3">Secure Payment</h5>
      <p className="card-text ctt card3">tionem possimus aliquam  consectetur ad</p>
    </div>
    </div>

    <div className="colorcard" >
      <div className="card-body card4">
      <IoHeadset className="card-icon"/>
      <h5 className="card-title ct card4">Back Guarantee</h5>
      <p className="card-text ctt card4">possimus aliquam similique r sit amet consectetu</p>
    </div>
    </div>
    </div>





    
  )
}

export default Colorcards;
