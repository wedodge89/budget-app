const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BillSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
    },
    paid: {
        type: Boolean,
        default: false
    }
});

const Bill = mongoose.model("Bill", BillSchema);

module.exports = Bill;