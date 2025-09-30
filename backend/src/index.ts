import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import User from './model/user'
import Leads from './model/leads'
import jwt from 'jsonwebtoken'
import cookieParser from "cookie-parser";
import cors from 'cors'
import './db/db'
import authUser from './middleware/middleware'
const app  = express()


app.use(express.json())
app.use(cookieParser());
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))


app.listen(process.env.PORT,()=>{

    console.log(`app listen on port ${process.env.PORT}`)
})


//routes
app.post("/api/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "All fields required" });
  }

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  // compare hashed password
  if(user.password !== password){

     return res.status(400).json({ message: "Invalid email or password" });
  }

  // create JWT
  const token = jwt.sign({ id: user._id, role: "admin" }, process.env.JWT_SECRET as string, {
    expiresIn: "1h",
  });

  // send token in HttpOnly cookie
  res.cookie("token", token, {
    httpOnly: true,
    secure: true, 
    sameSite: "none",
    maxAge: 60 * 60 * 1000, // 1 hour
  });

  return res.json({ message: "Login successful" });
});

app.get('/api/authuser',authUser,async(req,res)=>{

  const {id} = (req as any).user 

  try{

        const user = await User.findOne({_id:id},{password:0})

        return res.json(user)

  }catch(error){

    console.log(error)
  }


})

app.post('/api/contact',async(req,res)=>{

      const {name,email,message} = req.body
  

      if(!name || !email || !message){

          return res.status(400).json('All fields required')
        
      }
    
    try{ 

            const newlead = new Leads({name,email,message})
             await newlead.save()

             return res.json({success:"Message sent successfully"})
    }catch(error){


      console.log(error)
    }


})

app.get('/api/contact',async(req,res)=>{

    try{

      const leads = await Leads.find({})

      return res.json(leads)

    }catch(error){

      console.log(error)
    }


})
app.get('/api/contact/:id',async(req,res)=>{

    try{

      const leads = await Leads.findById(req.params.id)

      return res.json(leads)

    }catch(error){

      console.log(error)
    }


})

// Logout route
app.post("/api/logout", (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,   // must match how you set the cookie at login
    secure:true, 
    sameSite: "none",
  });

  return res.json({ message: "Logged out successfully" });
});