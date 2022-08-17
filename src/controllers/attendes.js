const Attende =require("../models/attendes");
const Event=require("../models/events");

const home=(req,res)=>{
    try{
        res.status(200).send({
            message:"Welcome to the attendes page"
        })
    }catch(error){
        res.status(500).send({
            message:"Error in the server",
            error
        })
    }
};

const add=async(req,res)=>{
    try{
        const attende=new Attende({
            name:req.body.name,
            email:req.body.email,
            phone:req.body.phone,
        })
        Event.find({id:req.body.eventId},(err,result)=>{
            if(err){
                return res.status(500).send({
                    message:"Error in the finding the event",
                    error
                })
            }else{
                if(result.length>0){
                    attende.save((err,res)=>{
                        if(err){
                            return res.status(500).send({
                                message:"Error in the saving the attende",
                                error
                            })
                        }else{
                            Event.findOneAndUpdate({id:req.body.eventId},{$inc:{availableSeats:-1}},(err,result)=>{
                                if(err){
                                    return res.status(500).send({
                                        message:"Error in the updating the event",
                                        error
                                    })
                                }else{
                                    return res.status(200).send({
                                        message:"Attende added successfully",
                                        result:res
                                    })
                                }
                            })
                        }
                    })
                }else{
                    res.status(404).send({
                        message:"Event not found"
                    })
                }
            }
        })
    }catch(error){
        res.status(500).send({
            message:"Error in the server",
            error
        })
    }
}

const list=async(req,res)=>{
    try{
        const result=await Attende.find();
        if(result){
            return res.status(200).send({
                message:"Attende list",
                result
            })
        }else{
            return res.status(404).send({
                message:"No attendes found"
            })
        }
    }catch(error){
        res.status(400).send({
            message:"Error in finding the list",
            error
        })
    }
}

module.exports={
    home,
    add,
    list
}