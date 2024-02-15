import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minLength: [3, "Firstname should be at least 3 characters long!"],
        maxLength: [30, "Firstname must not exceed 30 characters!"],
    },
    lastName: {
        type: String,
        required: true,
        minLength: [3, "Lastname should be at least 3 characters long!"],
        maxLength: [30, "Lastname must not exceed 30 characters!"],
    },
    email: {
        type: String,
        required: true,
        validate: [validator.isEmail, "Provide a valid email"] 
    },
    phone: {
        type: String,
        required: true,
        minLength: [10, "Phone number should only be 10 digits long!"],
        maxLength: [10, "Phone number should only be 10 digits long!"],
    },
    date: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    }
});

export const Reservation = mongoose.model("Reservation", reservationSchema);