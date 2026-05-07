import Car from "../Model/CarModel.js";

export const insert = async(req,res)=>{
    try {
        const {platenumber,drivername,phonenumber} = req.body;
        const carExist = await Car.findOne({platenumber});
        if(carExist){
            res.json({success:false,message:"Car Exist Already"})
            return;
        }
        const insertCar= await Car.create({
            platenumber,
            drivername,
            phonenumber
        })
        return res.json({success:true,message:"Car Create Successfull"})
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}


export const select = async (req,res) => {
    try {
        const cars = await Car.find()
        if(!cars){
            res.json({success:false,message:"No Car Exist"})
            return;
        }
        return res.json({success:true,cars})
    } catch (error) {
     res.json({success:false,message:error.message})   
    }
}