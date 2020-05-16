import React from "react";
import "./../../compCss/BillCard.css"
let moment = require("moment");

const Card = (props) => {
    return (
        <div className="card billCard">
            <div className="card-body text-center">
                <h5 className="card-title card-text">Name: {props.name}</h5>
                <span className="billCardBody">
                    <p className="bill-category card-text">Category: {props.category}</p>
                    <p className="bill-amount card-text">Amount: ${props.amount}</p>
                    <p className="due-date card-text">Due: {moment(props.date).format("MM/DD/YYYY")}</p>
                    <p className="paid">{props.paid}</p>
                </span>
                <button className="updateBillButton" onClick={() => props.updateBill(props._id)} >Update Bill</button>
                <button className="deleteBillButton" onClick={() => props.deleteBill(props._id)} >Delete Bill</button>


            </div>
        </div>
    )
}

export default Card;