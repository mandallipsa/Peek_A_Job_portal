import express from "express";
import dotenv from 'dotenv';

const app= express();

dotenv.config({path:"./config/config.env"});
app.listen(process.env.PORT,()=>{
  console.log(`Server running on port ${process.env.PORT}`);
});

export default app;