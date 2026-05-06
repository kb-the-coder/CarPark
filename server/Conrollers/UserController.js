import User from "../Model/UserModel.js";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// Register
export const Register = async(req,res)=>{
    try {

    const {name,email,password} = req.body;
    const person = await User.findOne({email})
    if(person){
        res.json({success:false,message:"Email Already Exist"})
        return;
    }
    const hashPass = await bcrypt.hash(password,10)
    const insert = await User.create({
        name,
        email,
        password:hashPass
    }) 
    const token = jwt.sign({id:insert._id},process.env.JWT_SECRET,{expiresIn:"7d"})
    return res.json({success:true,message:"User Create Successfull",token}) 

    } catch (error) {
        res.json({success:false ,message:error.message})
    }
    
}

// Login

export const Login = async(req,res)=>{
    try {
        const {email,password} = req.body;
        const person = await User.findOne({email})
        if(!person){
            res.json({success:false,message:"Email Not Exist"})
            return;
        }
        const isMatch= await bcrypt.compare(password,person.password)
        if(!isMatch){
            res.json({success:false,message:"Password Invalid"})
            return;
        } 
        const token = jwt.sign({id:person._id},process.env.JWT_SECRET,{expiresIn:"7d"})
        return res.json({success:true,message:"User Login Successfull",token}) 
    } catch (error) {
        res.json({success:false,message:error.message})
    }
}