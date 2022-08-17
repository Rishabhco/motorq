const Event=require("../models/events");

const home=(req,res)=>{
    try{
        res.status(200).send({
            message:"Welcome to the events page"
        })
    }catch(err){
        res.status(500).send({
            message:"Error in the server"
        })
    }
};

const add=async(req,res)=>{
    try{
        const event=new Event({
            name:req.body.name,
            capacity:req.body.capacity,
            availability:req.body.availability,
            startDate:new Date(req.body.startDate),
            endDate:new Date(req.body.endDate),
        })
        const result=await event.save();
        res.status(200).send({
            message:"Event added successfully",
            result
        })
    }catch(error){
        res.status(500).send({
            message:"Error in adding the event",
            error
        })
    }
}

const list=async(req,res)=>{
    try{
        const result=await Event.find();
        res.status(200).send({
            message:"Events list",
            result
        })
    }catch(error){
        res.status(500).send({
            message:"Error in finding the list",
            error
        })
    }
}

module.exports={
    home,
    add,
    list
};