import React from "react";
import { Link } from "react-router-dom";
import "./../../compCss/BillCard.css"
let moment = require("moment");

const Card = (props) => {
    return (
        <div className="card billCard">
            <div className=" card-body text-center">
                <h5 className="card-title">{props.name}</h5>
                <p className="bill-amount">${props.amount}</p>
                <p className="due-date">{moment(props.date).format("MM/DD/YYYY")}</p>
                <p className="paid">{props.paid}</p>
                <button onClick={() => props.updateBill(props._id)} >Update Bill</button>
                <button onClick={() => props.deleteBill(props._id)} >Delete Bill</button>


            </div>
        </div>
    )
}

export default Card;