import Service from "../models/Service.js";
import Doctor from "../models/Doctor.js"
import { createError } from "../utils/error.js";

//to be remove incase error or way gamit
export const createService = async (req,res,next) => {
    
    const doctorId = req.params.doctorid;
    const newSched = new Service(req.body)

    try {
        const savedService = await newSched.save()
        try {
            await Doctor.findByIdAndUpdate(doctorId, {$push: { schedules: savedService._id},
            });
        } catch (err) {
            next(err)
        }
        res.status(200).json(savedService);
    } catch (err) {
        next(err);
    }

};

// export const createService = async (req,res,next) => {
//     const newService = new Service(req.body)

//     try{
//         const savedService = await newService.save()
//         res.status(200).json(savedService)

//     }catch(err){
//         next(err);
//     }
// }


export const updateService = async (req,res,next) => {
    try{
        const updatedService = await Service.findByIdAndUpdate(req.params.id,
        { $set: req.body}, 
        { new: true }
        );
        res.status(200).json(updatedService);
    }catch(err){
        next(err);
    }
};

export const deleteService = async (req,res,next) => {
    try{
        await Service.findByIdAndDelete(
            req.params.id
        );
        res.status(200).json("Service has been deleted");

    }catch(err){
        next(err);
    }
};

export const getService = async (req,res,next) => {
    try{
        const service = await Service.findById(
            req.params.id
        );
        res.status(200).json(service);

    }catch(err){
        next(err);
    }
};

export const getServices = async (req,res,next) => {
    try{
        const services = await Service.find();
        res.status(200).json(services );
    }catch(err){
        next(err);
    }
};