const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    total: {
        type: Number,
        required: true
    },
    rent: {
        type: Number,
        required: true
    },
    car: {
        type: Number,
        required: true,
    },
    utility: {
        type: Number,
        required: true
    },
    food: {
        type: Number,
        required: true
    },
    school: {
        type: Number,
        required: true
    },
    misc: {
        type: Number,
        required: true
    },

})
const Budget = mongoose.model("Budget", BudgetSchema);
module.exports = Budget;