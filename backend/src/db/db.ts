import mongoose from "mongoose";

mongoose.connect(process.env.DB as string) // replace 'mydb' with your db name
  
.then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Connection error:", error);
  });
