import ParkingSlot from "../Model/ParkingSlotModel.js";

export const insert = async(req,res)=>{
    try {
        const {slotnumber,slotstatus} = req.body;
        const insertPark = await ParkingSlot.create({
            slotnumber,slotstatus
        })
        return res.json({success:true,message:"Park Slot Created Successfull"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const select = async(req,res)=>{
    try {
        const selectPark = await ParkingSlot.find();
        return res.json({success:true,selectPark})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const update = async(req,res)=>{
    try {
        const {id} = req.params;
        const {slotnumber,slotstatus} = req.body;
        const updatePark = await ParkingSlot.findByIdAndUpdate({_id:id},{
            slotnumber,slotstatus
        })
        return res.json({success:true,message:"Parking Slot Updated Successfull"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}

export const deletePark = async(req,res)=>{
    try {
       const {id} = req.params;
       const remove = await ParkingSlot.findByIdAndDelete({_id:id})
       return res.json({success:true,message:"Park Slot Delete Successfull"}) 
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}