import mongoose from "mongoose";


const jobSchema = new mongoose.Schema({
  title:{
    type:String,
    required:[true,"Please provide job title"],
    minLength:[3,"Job title must contain atleast 3 characters"],
    maxLength:[50,"Job title can't exceed 50 characters !"],
  },
  description:{
    type:String,
    required:[true,"Please provide job description"],
    minLength:[50,"Job description must contain atleast 50 characters"],
    maxLength:[350,"Job description can't exceed 350 characters !"],
  },
  category:{
    type:String,
    required:[true,"Job category is required !"]
  },
  country:{
    type:String,
    required:[true,"Job Country is required !"]
  },
  
  city:{
    type:String,
    required:[true,"Job City is required !"]
  },

  location:{
    type:String,
    required:[true,"Please provide exact location!"],
    minLength:[50,"Job location must contain atleast 50 characters"],

  },
  fixedSalary:{
    type:Number,
    minLength:[4,"Fixed Salary must contain atleast 4 digits"],
    maxLength:[9,"Fixed Salary can't exceed 9 digits"],
  },
  salaryFrom:{
    type:Number,
    minLength:[4,"salary from must contain atleast 4 digits"],
    maxLength:[9," salary  from can't exceed 9 digits"],
  },
  salaryTo:{
    type:Number,
    minLength:[4,"salaryTo must contain atleast 4 digits"],
    maxLength:[9," salaryTo can't exceed 9 digits"],
  },
  expired:{
    type:Boolean,
    default:false,
  },
  jobPostedOn:{
    type:Date,
    default:Date.now(),
  },
  postedBy:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true,
  },
});

export const Job = mongoose.model("Job",jobSchema);