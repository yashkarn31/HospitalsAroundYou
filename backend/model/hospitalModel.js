const mongoose = require("mongoose");
const hospitalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    cityLower: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
    },
    specialities: {
        type: Array,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description : {
        type: String,
        required: true
    },
    numberOfDoctors:{
        type: Number,
        required: true
    },
    numberOfDepartments:{
        type: Number,
        required: true
    },

    createdAt: {
        type: Date,
        default: Date.now(),
    },
    updatedAt: {
        type: Date,
        default: Date.now(),
    },
});


const hospitalModel = mongoose.model("Hospitals", hospitalSchema);

module.exports = hospitalModel;