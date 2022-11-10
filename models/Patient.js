import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
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
    healthstatus: {
        type: String,
    }
});

export default mongoose.model("Patient", patientSchema);