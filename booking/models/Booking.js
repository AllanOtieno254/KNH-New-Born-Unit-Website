const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
    bookingID: String,
    bookingType: String,
    date: String,
    time: String,
    parentName: String,
    phone: String,
    email: String,
    babyDetails: String,
    notes: String,
    status: { type: String, default: "pending" },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Booking", BookingSchema);
