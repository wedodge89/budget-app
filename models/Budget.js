const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BudgetSchema = new Schema({
    total: {
        type: Interger,
        required: true
    },
    rent: {
        type: Interger,
        required: false
    },
    car: {
        type: Interger,
        required: false,
    },
    utility: {
        type: Interger,
        required: false
    },
    food: {
        type: Interger,
        required: false
    },
    school: {
        type: Interger,
        required: false
    },
    misc: {
        type: Interger,
        required: false
    },

})
const Budget = mongoose.model("Budget", BudgetSchema);
module.exports = Budget;