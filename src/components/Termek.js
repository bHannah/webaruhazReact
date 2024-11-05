import React, { useContext } from 'react'
import { KosarContext } from '../context/KosarContext';

export default function Termek(props) {
    const {kosarba} = useContext(KosarContext);
    function kosarbaHelyezes(){
        kosarba(props)
    }
    return(
        <div className="col-lg-3">
        <div className="card m-1">
            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="" />
                <h5>{props.title}</h5>
                <p>{props.description}</p>
                <p>{props.category}</p>
                <p>{props.price} €</p>
                <a href="#" className="kattintott btn btn-primary" onClick={()=>{kosarbaHelyezes()}}>Kosárba</a>
            </div>
        </div>
        </div>
    )
}