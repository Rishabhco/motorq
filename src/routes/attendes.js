const express=require("express");
const {home,add,list}=require("../controllers/attendes");
const router=express.Router();

router.get("/home",home);
router.post("/add",add);
router.get("/list",list);

module.exports=router;