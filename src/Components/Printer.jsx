import React from 'react'
import {printer} from '../Data'

export default function Printer() {
    // const Datable = [mobile];
  return (
    <>
    <p className='cat-main' id='printer'>Printer</p>
    
    <div className='container'>
      
      {
        printer.map((item) => (
                <div className='container-main'>
                <img  src={item.image} alt={item.brand}/>
                <div className='printer-details'>
                    <h2 className='brand' >{item.brand} {item.model}</h2>
                    <pre>Price: ${item.price} <strike>${1000}</strike></pre>
                    <p className='desc'>{item.description}</p>
                    <a className='buy-now'>BUY NOW</a>
                </div>
                </div> )
        )
    }
    </div>
    </>
  )
}
