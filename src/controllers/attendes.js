const Attende =require("../models/attendes");

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
        const result=await attende.save();
        res.status(200).send({
            message:"Attende added successfully",
            result
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