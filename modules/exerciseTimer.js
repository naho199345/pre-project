const mongoose = require("mongoose");

const timerSchema = mongoose.Schema({
    purpose: {
        type: String,
        required: true,
    },
    exerciseTime: {
        type: Number,
        required: true,
    },
    time: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model("Timer", timerSchema);