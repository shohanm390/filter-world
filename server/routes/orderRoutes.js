const express = require('express');
const {
    addOrderItems,
    getMyOrders,
    getOrders,
} = require('../controllers/orderController');
const { protect, authorize } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', protect, addOrderItems);
router.get('/my', protect, getMyOrders);
router.get('/', protect, authorize('admin'), getOrders);

module.exports = router;
