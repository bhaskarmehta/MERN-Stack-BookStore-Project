import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async(req,res)=>{
   try {
      const {username,email,password} = req.body;
      const user = await User.findOne({email});
      if(user){
        return res.status(400).json({message:"User already exists"});
      }
      const hashPassword =  await bcryptjs.hash(password,10); // To secure our password
      const newUser = new User({
        username,
        email,
        password:hashPassword,
      });
      const savedUser = await newUser.save();
      res.status(201).json({message:"Usser Created Successfully !!!",user:{
         _id: savedUser._id,username:savedUser.username,email:savedUser.email
      }}); 
   } catch (error) {
      console.log(`Error: ${error}`);
      res.status(500).json({message: "Internal Server Error"});
   }
}

export const login = async(req,res) =>{
    try {
     const {email,password} = req.body;
     const user = await User.findOne({email});
     if(!user){
        return res.status(403).json({message:"Email or password is invalid"})
     }
     else{
        const isMatch = await bcryptjs.compare(password,user.password); //comparing user password and password stored in DB
        if(!isMatch){
            return res.status(403).json({message:"Email or password is invalid"})
        }
        return res.status(200).json({message:"Loggin Successfully !!", user:{
            _id:user._id,
            username:user.username,
            email:user.email,
        }})
     }
    } catch (error) {
        console.log(`Error: ${error}`);
        res.status(500).json({message: "Internal Server Error"});
    }
}
