
const mongoose=require('mongoose');
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    // Add other user properties here
  });


  module.exports=mongoose.model('user',userSchema)