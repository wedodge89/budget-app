const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    rent: {
        type: Number,
        required: false
    },
    car: {
        type: Number,
        required: false,
    },
    utility: {
        type: Number,
        required: false
    },
    food: {
        type: Number,
        required: false
    },
    school: {
        type: Number,
        required: false
    },
    misc: {
        type: Number,
        required: false
    },

})
const Budget = mongoose.model("Budget", BudgetSchema);
module.exports = Budget;