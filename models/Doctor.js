import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    age:{
        type: Number,
        required: true, 
    },
    gender:{
        type: String,
        required: true, 
    },
    address:{
        type: String,
        required: true, 
    },
    photo:{
        type: String,
    },
    schedules:{
        type: [String],
    },
    rating:{
        type: Number,
        min: 0,
        max: 5,
    },
});

export default mongoose.model("Doctor", doctorSchema);