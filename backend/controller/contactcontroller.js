
const mongoose = require("mongoose")

const contactModel = require("../model/contactModel")
const contactRegister = async(req,res)=>{

    try{
        const newContac = contactModel({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            subjectName:req.body.subjectName
        })

        const saveContact = await newContac.save()
        if(saveContact){
            res.send(saveContact)
        }
    }catch(error){
     res.send(error)
    }
}



const getContact = async (req,res)=>{
    try{
        
        const getcontact = await contactModel.find()
        if(getcontact){
            res.send(getcontact)
        }
            }
            catch(error){
                console.log(error)
            }
        
    }

module.exports ={ contactRegister,getContact}