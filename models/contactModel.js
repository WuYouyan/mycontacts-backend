const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    },
    name: {
        type: String,
        required: [true, "contact name is required"]
    },
    email: {
        type: String,
        required: [true, "contact email address is required"]
    },
    phone: {
        type: String,
        required: [true, "contact phone number is required"]
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("Contact", contactSchema);