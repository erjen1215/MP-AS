import mongoose from "mongoose";

const ServiceSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        unique:true
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    photo:{ 
        type: String,
    },
    rating:{
        type: Number,
        min: 0,
        max: 5,
    },
    availablescheds: [{number: Number, unavailableDates : { type: [Date]}}],
    },
    { timestamps: true}
);

export default mongoose.model("Service", ServiceSchema)

// [
//     {number:101,unavailableDates: [01.05]}
//     {number:102,unavailableDates: []}
//     {number:103,unavailableDates: []}
//     {number:104,unavailableDates: []}
//     {number:105,unavailableDates: []}
// ]