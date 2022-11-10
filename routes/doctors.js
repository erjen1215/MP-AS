import express from "express";
import { createDoctor, deleteDoctor, getDoctor, getDoctors, updateDoctor } from "../controllers/doctor.js";
import Doctor from "../models/Doctor.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createDoctor);

//UPDATE
router.put("/:id", verifyAdmin,  updateDoctor);

//DELETE
router.delete("/:id", verifyAdmin ,deleteDoctor);

//GET
router.get("/:id", getDoctor);

//GET ALL
router.get("/", getDoctors);


export default router;