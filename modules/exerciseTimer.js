const mongoose = require("mongoose");

const timerSchema = mongoose.Schema({
    purpose: {
        type: Number,
        required: true,
    },
})

module.exports = mongoose.model("Timer", timerSchema);