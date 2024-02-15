// Require necessary modules
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const auth = require('../middleware/auth');
const User = require('../models/User');

// Update password route
router.put('/update-password', auth, async (req, res) => {
  try {
    // Retrieve user ID from authentication middleware
    const userId = req.user.id;
    // Retrieve new password from request body
    const { newPassword } = req.body;
    // Hash the new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    // Update user's password in the database
    await User.findByIdAndUpdate(userId, { password: hashedPassword });
    res.status(200).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error('Error updating password:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user route
router.get('/user', auth, async (req, res) => {
  try {
    // Retrieve user ID from authentication middleware
    const userId = req.user.id;
    // Find user by ID in the database
    const user = await User.findById(userId).select('-password');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete user route
router.delete('/delete-account', auth, async (req, res) => {
  try {
    // Retrieve user ID from authentication middleware
    const userId = req.user.id;
    // Delete user from the database
    await User.findByIdAndDelete(userId);
    res.status(200).json({ message: 'Account deleted successfully' });
  } catch (error) {
    console.error('Error deleting account:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;
