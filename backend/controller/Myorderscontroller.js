
const mongoose = require("mongoose")

const MyorderModel = require("../model/MyOrdersModel")
const MyorderRegister = async(req,res)=>{

    try{
        const newOrder = MyorderModel({
            User: req.body.User,
            Phone: req.body.Phone,
            Course: req.body.Course,
            Price: req.body.Price,
        })

        const saveMyOrder = await newOrder.save()
        if(saveMyOrder){
            res.send(saveMyOrder)
        }
    }catch(error){
     res.send(error)
    }
}



const getMyorder = async (req,res)=>{
    try{
        
        const getMyorder = await MyorderModel.find()
        if(getMyorder){
            res.send(getMyorder)
        }
            }
            catch(error){
                console.log(error)
            }
        
    }

module.exports ={ MyorderRegister,getMyorder}