
 const mongoose = require("mongoose")

const learningModel = require("../model/learningModel")
const LearningRegister = async(req,res)=>{

    try{
        const newlearnin = learningModel({
            name: req.body.name,
            price: req.body.price,
            description: req.body.description,
            image: req.file.filename,
        })

        const saveLearning = await newlearnin.save()
        if(saveLearning){
            res.send(saveLearning)
        }
    }catch(error){
     res.send(error)
    }
}



const getLearning = async (req,res)=>{
    try{
        
        const newlearnin = await learningModel.find()
        if(newlearnin){
            res.send(newlearnin)
        }
            }
            catch(error){
                console.log(error)
            }
        
    }

module.exports ={ LearningRegister,getLearning}