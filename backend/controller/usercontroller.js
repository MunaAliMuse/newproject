

const userModel= require("../model/userModel")
//Register users


const registeruser = async(req, res)=>{
    try{
  
const newdata =  userModel(req.body)
const userdata = await newdata.save()
if(userdata){
    res.send(newdata)
}
    }
    catch(error){
        console.log(error)
    }

}
//log in
const loginUser= async(req,res)=>{
    try {
        if(req.body.email && req.body.password){
            const newuserdata = await userModel.findOne(req.body).select("-password")
            if(newuserdata){
                res.send(newuserdata)
            }
            else{
                res.send(
                    {error:'user not found'}) 
        }
      
      }
      else{
        res.send("email and password required")
      }
    } catch (error) {
      console.log(error)
  }
  
  }


  module.exports={
    registeruser,
    loginUser
  }