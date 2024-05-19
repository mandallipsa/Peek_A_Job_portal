import express from "express";
// import dotenv from "dotenv";



const app = express();

// dotenv.config({path:"./config/config.env"})
app.listen(8000, () => {
  console.log("Server is listening to port 8080")
})

export default app;