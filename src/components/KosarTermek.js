import React from 'react'

export default function KosarTermek(props) {
    return(
        <div className="col-lg-5">
        <div className="card m-1">
            <div className="card-body">
                <img className="card-img-top" src={props.image} alt="" />
                <h5>{props.title}</h5>
                <p>{props.price} €</p>
            </div>
        </div>
        </div>
    )
}