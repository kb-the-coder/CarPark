import mongoose from 'mongoose';

const PaymentSchema = mongoose.Schema({
    parkrec:{type:mongoose.Schema.Types.ObjectId,ref:"parkingrecord"},
    amount_paid:{type:Number,required:true},
    paid_date:{type:Date,required:true}
},{
    timestamps:true
})
const Payment = mongoose.model("payment",PaymentSchema);
export default Payment;