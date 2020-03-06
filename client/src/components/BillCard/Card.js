import React from "react";
import { Link } from "react-router-dom";
import "./../../compCss/BillCard.css"
let moment = require("moment");

const Card = (props) => {
    return (
        <div className="card billCard">
            <div className=" card-body text-center bg-success">
                <h5 className="card-title">Name: {props.name}</h5>
                <p className="bill-category">Category: {props.category}</p>
                <p className="bill-amount">Amount: ${props.amount}</p>
                <p className="due-date">Due: {moment(props.date).format("MM/DD/YYYY")}</p>
                <p className="paid">{props.paid}</p>
                <button class="updateBillButton" onClick={() => props.updateBill(props._id)} >Update Bill</button>
                <button class="deleteBillButton" onClick={() => props.deleteBill(props._id)} >Delete Bill</button>


            </div>
        </div>
    )
}

export default Card;