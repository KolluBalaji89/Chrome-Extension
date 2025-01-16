const User=require('./schema')
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
// Endpoint to get all users
router.get('/users', async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (err) {
      res.status(500).json({ message: 'Error fetching users' });
    }
  });
  
  // Endpoint to create a new user
  router.post('/users', async (req, res) => {
   
    try {
        await User.create({
          name: req.body.name,
        
          email: req.body.email,
     
        }).then
        (res.json({
          success: true,
        }));
      } catch (error) {
        console.log(error);
        res.json({ success: false });
      }
  });
  router.delete('/:userId', async (req, res) => {
    try {
      const userId = req.params.userId;
      if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).json({ message: 'Invalid userId format' });
      }
      const deletedUser = await User.findByIdAndDelete(userId);
      res.json({ userId:deletedUser._id, message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting user:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  router.put('/:userId',async(req,res)=>{
    try {
      const product = {
        name: req.body.name,
        email: req.body.email,
      
      };
  
      const updateuser = await User.findByIdAndUpdate(
        { _id: req.params.userId },
        product,
        {new:true}
      );
    
      res.json({user:updateuser
       });
    } catch (error) {
      res.json({ message: error });
    }
  })
  module.exports = router;