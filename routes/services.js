import express from "express";
import { verifyAdmin } from "../utils/verifyToken.js";
import { deleteService, getService, getServices, updateService, createService } from "../controllers/service.js";

const router = express.Router();

//CREATE to be deleted ug error nya way gamit
router.post("/:doctorid", verifyAdmin, createService);

//UPDATE
router.put("/:id", verifyAdmin,  updateService);

//DELETE
router.delete("/:id", verifyAdmin ,deleteService);

//GET
router.get("/:id", getService);

//GET ALL
router.get("/", getServices);


export default router 

// export const createService = async (req,res,next) => {
//     const newService = new Service(req.body)

//     try{
//         const savedService = await newService.save()
//         res.status(200).json(savedService)

//     }catch(err){
//         next(err);
//     }
// }
