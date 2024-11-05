import React from 'react'
import Termek from './Termek'

export default function Vasarloter(props) {
    return(
        <div className='row'>
        {props.termekLista.map((elem, index) =>{
            return(<Termek key={index} category={elem.category} image={elem.image} title={elem.title} description={elem.description} price={elem.price}/>)
        })}
        </div>
        
    )
}
