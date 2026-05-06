import mongoose from "mongoose";

const CarSchema = mongoose.Schema({
    platenumber:{type:String,required:true,unique:true},
    drivername:{type:String,required:true},
    phonenumber:{type:Number,required:true}
},{
    timestamps:true
})

const Car = mongoose.model("car",CarSchema)
export default Car;