import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import patientRoute from "./routes/patients.js";
import servicesRoute from "./routes/services.js";
import doctorsRoute from "./routes/doctors.js";
import cookieParser from "cookie-parser";
const app = express();
dotenv.config();

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.")
  } catch (error) {
    throw error
  }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDB connected!")
}) 

//MIDDLEWARESSSS  
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/services", servicesRoute);
app.use("/api/doctors", doctorsRoute);
app.use("/api/patients", patientRoute);

app.use((err,req,res,next) =>{
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  })
})

app.listen(8800, () => {
    connect()
    console.log("Connected to Backend!")
})
