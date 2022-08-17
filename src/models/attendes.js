const mongoose = require("mongoose");

const attendeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    phone:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
});

attendeSchema.virtual("events", {
    ref: "Event",
    localField: "_id",
    foreignField: "attendeList.attendeId",
});

const Attende = mongoose.model("Attende", attendeSchema);
module.exports = Attende;