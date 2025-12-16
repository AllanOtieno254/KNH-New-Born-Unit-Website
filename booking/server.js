const express = require("express");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const cors = require("cors");
const Booking = require("./models/Booking");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

mongoose.connect("mongodb://127.0.0.1:27017/nbuBookings")
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error(err));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "YOUR_HOSPITAL_EMAIL@gmail.com",
        pass: "YOUR_GMAIL_APP_PASSWORD"
    }
});

app.post("/api/bookings", async (req, res) => {
    try {
        const bookingID = "NBU-" + Math.floor(100000 + Math.random() * 900000);

        const booking = new Booking({
            ...req.body,
            bookingID
        });

        await booking.save();

        await transporter.sendMail({
            to: "allanotieno2001@gmail.com",
            subject: "New Booking Received",
            text: `New booking received.\nBooking ID: ${bookingID}`
        });

        if (req.body.email) {
            await transporter.sendMail({
                to: req.body.email,
                subject: "Booking Confirmation",
                text: `Your booking has been confirmed.\nBooking ID: ${bookingID}`
            });
        }

        res.json({ bookingID });

    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Booking failed" });
    }
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
