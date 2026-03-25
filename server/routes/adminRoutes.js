const express = require('express');
const router = express.Router();
const { getUsers, deleteUser, getStats } = require('../controllers/adminController');
const { protect, authorize } = require('../middleware/authMiddleware');

// All routes here are restricted to Admin
router.use(protect);
router.use(authorize('admin'));

router.get('/users', getUsers);
router.delete('/users/:id', deleteUser);
router.get('/stats', getStats);

module.exports = router;
