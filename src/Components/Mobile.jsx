import React from 'react'
import { mobile} from '../Data'

export default function Mobile() {
    // const Datable = [mobile];
  return (
    <div className='main'>
    <p className='cat-main' id='Mobile'>Mobile</p>
    <div className='container'>
      
      {
        mobile.map((item) => (
                <div className='container-main'>
                <img  src={item.image} alt={item.brand}/>
                <div className='mobile-details'>
                    <h2 className='brand' >{item.brand} {item.model}</h2>
                    <pre>Price: ${item.price} <strike>${1000}</strike></pre>

                    <p className='desc'>{item.description}</p>
                    <a className='buy-now'>BUY NOW</a>
                </div>
                </div> )
        )
    }
    </div>
    </div>
  )
}
