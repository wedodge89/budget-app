import React from "react";
// import "./style.css";

const Card = (props) => {
    return (
        <div className="card">
            <div className=" card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                <p className="bill-amount">{props.amount}</p>
                {/* <p className="due-date"{...props}></p> */}
                <button onClick={() => props.editClick(props._id)} >Edit</button>
                <button onClick={() => props.deleteBill(props._id)} >Delete</button>


            </div>
        </div>
    )
}

export default Card;