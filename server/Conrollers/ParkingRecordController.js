import ParkingRecord from "../Model/ParkingRecordModel.js";
import ParkingSlot from "../Model/ParkingSlotModel.js";

export const insert = async(req,res)=>{
    try {
        const {car,entry_time,exist_time,duration,parkslot} = req.body;
        const slot_availabity = await ParkingSlot.findById({_id:parkslot})
        if(slot_availabity.slotstatus !== "available"){
            return res.json({success:false,message:"Sorry Park Slot is Not Available"})
        }
        const insertPark = await ParkingRecord.create({
            car,
            entry_time,
            exist_time,
            duration,
            parkslot
        })
        await ParkingSlot.findByIdAndUpdate({_id:parkslot},{
            slotstatus:exist_time?"available":"taken"
        })
        return res.json({success:true,message:"Park Recorded Successfull"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const select = async(req,res)=>{
    try {
        const selectPark = await ParkingRecord.find().populate(["parkslot","car"]);
        return res.json({success:true,selectPark})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const update = async(req,res)=>{
    try {
        const {id} = req.params;
        const {car,entry_time,exist_time,duration,parkslot} = req.body;
        if(parkslot){
        const slot_availabity = await ParkingSlot.findById({_id:parkslot})
        if(slot_availabity.slotstatus !== "available"){
            return res.json({success:false,message:"Sorry Park Slot is Not Available"})
        }
       }
        const updatePark = await ParkingRecord.findByIdAndUpdate({_id:id},{
            car,entry_time,exist_time,duration,parkslot
        })
        return res.json({success:true,message:"Parking Record Updated Successfull"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const deletePark = async(req,res)=>{
    try {
       const {id} = req.params;
       const remove = await ParkingRecord.findByIdAndDelete({_id:id})
       return res.json({success:true,message:"Park Delete Successfull"}) 
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}