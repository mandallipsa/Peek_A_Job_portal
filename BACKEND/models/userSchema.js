import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name:{
    type: String,
    required:[true,"Provide your name"],
    minLength:[3,"Name must contain atleast 3 characters"],
    maxLength:[30,"Name can't exceed 30 characters"],
  },

  email:{
    type:String,
    required:[true,"Please provide your email!!"],
    validate:[validator.isEmail,"Please provide a valid email"],

  },
  phone:{
    type: Number,
    required:[true,"Please provide your phone number"],
  },
  password:{
    type:String,
    required:[true,"Provide your password"],
    minLength:[8,"Password must contains 8 characters"],
    maxLength:[32,"Password can't exceed 32 characters"],
    select:false,

  },

  role:{
    type:String,
    required:[true,"Provide your role"],
    enum:["Job Seeker", "Employer"],

  },
  createdAt:{
    type: Date,
    default: Date.now,

  },
});

//HASHING THE PASSWORD

userSchema.pre("save",async function(next){
  if(!this.isModified("password")){
    next();
  }
  this.password = await bcrypt.hash(this.password,10);

});


//COMPARING PASSWORD

userSchema.methods.comparePassword = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword,this.password);
};

//GENERATING A JWT FOR AUTHORISATION
userSchema.methods.getJWTToken = function(){
  return jwt.sign({id:this._id},process.env.JWT_SECRET_KEY,{
  expiresIn :process.env.
  JWT_EXPIRE,
});
};


export const User = mongoose.model("User",userSchema);

