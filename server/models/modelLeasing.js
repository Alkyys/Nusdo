import mongoose from 'mongoose';

const LeasingSchema = new mongoose.Schema({
    user_id:{
        type:ObjectId,
        required:true
    },
    car_id:{
        type:ObjectId,
        required:true
    },
    startDate:{
        type:Date,
        require:true
    },
    endDate:{
        type:Date,
        require:true
    },
    dailyPrice:{
        type:Number,
        required: true
    }
});

LeasingSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('ModelLeasing', LeasingSchema);
