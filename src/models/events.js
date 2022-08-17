const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    capacity:{
        type:Number,
        required:true,
        trim:true,
    },
    availability:{
        type:Number,
        required:true,
        trim:true,
    },
    startDate:{
        type:Date,
        required:true,
        trim:true,
    },
    endDate:{
        type:Date,
        required:true,
        trim:true,
    },
    attendeList:[
        {
            attendeId:{
                type:mongoose.Schema.Types.ObjectId,
                ref:"Attende",
                trim:true,
            }
        }
    ]
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;