import express from "express";
import { createPatient, deletePatient, getPatient, getPatients, updatePatient } from "../controllers/patient.js";
import Patient from "../models/Patient.js";
import {verifyAdmin} from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createPatient);

//UPDATE
router.put("/:id", verifyAdmin,  updatePatient);

//DELETE
router.delete("/:id", verifyAdmin ,deletePatient);

//GET
router.get("/:id", getPatient);

//GET ALL
router.get("/", getPatients);


export default router;