import mongoose from 'mongoose';

const ParkingRecordSchema = mongoose.Schema({
    car:{type:mongoose.Schema.Types.ObjectId,ref:"car"},
    entry_time:{type:Date,required:true},
    exist_time:{type:Date,required:true},
    duration:{type:Number,required:true},
    parkslot:{type:mongoose.Schema.Types.ObjectId,ref:"parkingslot"},
},{
    timestamps:true
})
const ParkingRecord = mongoose.model("parkingrecord",ParkingRecordSchema);
export default ParkingRecord;
