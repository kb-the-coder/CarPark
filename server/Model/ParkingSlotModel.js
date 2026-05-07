import mongoose from "mongoose";

const ParkingSlotSchema = mongoose.Schema({
    slotnumber:{type:String,required:true},
    slotstatus:{type:String,enum:["available","taken","damaged"],default:"available"}
},{
    timestamps:true
})
const ParkingSlot = mongoose.model("parkingslot",ParkingSlotSchema);
export default ParkingSlot;