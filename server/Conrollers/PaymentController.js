import Car from "../Model/CarModel.js";
import ParkingRecord from "../Model/ParkingRecordModel.js";
import Payment from "../Model/PayementModel.js";


export const insert = async(req,res)=>{
    try {
        const {parkrec,amount_paid,paid_date} = req.body;
        const park_time = await ParkingRecord.findOne({_id:parkrec})
        const generatePayment = park_time.duration * 500
        if(amount_paid < generatePayment || amount_paid > generatePayment){
            return res.json({success:false,message:`You must pay only ${generatePayment}`})
        }
        const insertPark = await Payment.create({
            parkrec,
            amount_paid,
            paid_date
        })
        return res.json({success:true,message:"Thank you for Paying Your Parking Bill"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const select = async(req,res)=>{
    try {
        const selectPark = await Payment.find().populate(["parkrec"]);
        return res.json({success:true,selectPark})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const update = async(req,res)=>{
    try {
        const {id} = req.params;
        const {parkrec,amount_paid,paid_date} = req.body;
        if(parkrec){
        const park_time = await ParkingRecord.findOne({_id:parkrec})
        const generatePayment = park_time.duration*500
         if(amount_paid < generatePayment || amount_paid > generatePayment){
            return res.json({success:false,message:`You must pay only ${generatePayment}`})
        }
    }
        const updatePark = await Payment.findByIdAndUpdate({_id:id},{
            parkrec,amount_paid,paid_date
        })
        return res.json({success:true,message:"Payment Updated Successfull"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const deletePark = async(req,res)=>{
    try {
       const {id} = req.params;
       await Payment.findByIdAndDelete({_id:id})
       return res.json({success:true,message:"Payment Delete Successfull"}) 
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}