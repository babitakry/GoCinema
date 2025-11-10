import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    user: {
        type: String,
        ref: 'User',
        required: true
    }
},{timestamps: true})