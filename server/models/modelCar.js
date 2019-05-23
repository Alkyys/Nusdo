import mongoose from 'mongoose';

let ObjectId = mongoose.Schema.Types.ObjectId;

const CarSchema = new mongoose.Schema({
    ownerid_id: ObjectId,
    available: {
        type: Boolean,
        required: true,
        default: false
    },
    brand: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    constructionYear: {
        type: Number,
    },
    horsepower: {
        type: Number,
    },
    availableSeatCount: {
        type: Number,
        min: 1,
        max: 7,
        required: true

    },
    engineType: {
        type: String,
        enum: ['Electric', 'Diesel', 'Essence', 'GPL'],
        required: true
    },
    automaticGearbox: {
        type: Boolean,
        required: true
    },
    location: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    leasings: {
        type:[ObjectId]
    }
});

//CarSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('cars', CarSchema);
