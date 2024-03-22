import mongoose from "mongoose";

const {Schema} = mongoose;

const HotelSchema = new Schema({
    id:{
        type: String,
        required: true
    },
    userId:{
        type: String,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    state:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    locationDescription:{
        type: String, 
        required: true
    },
    gym:{
        type: Boolean,
        default: false
    },
    spa:{
        type: Boolean,
        default: false
    },
    bar:{
        type: Boolean,
        default: false
    },
    laundry:{
        type: Boolean,
        default: false
    },
    restaurant:{
        type: Boolean,
        default: false
    },
    shopping:{
        type: Boolean,
        default: false
    },
    freeParking:{
        type: Boolean,
        default: false
    },
    bikeRental:{
        type: Boolean,
        default: false
    },
    freeWifi:{
        type: Boolean,
        default: false
    },
    movieNights:{
        type: Boolean,
        default: false
    },
    SwimmingPool:{
        type: Boolean,
        default: false
    },
    CoffeeShop:{
        type: Boolean,
        default: false
    },
    addedAt:{
        type: Date,
        default: Date.now
    },
    updatedAt:{
        type: Date,
        default: Date.now
    },
    rooms:{
        type: Array,
        default: []
    },
    bookings:{
        type: Array,
        default: []
    }
}, {timestamps: true})

export default mongoose.model("hotel", HotelSchema);