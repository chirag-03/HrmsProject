const express = require('express');
const router = express.Router();
const {
  createLeave,
  getLeaves,
  updateLeaveStatus,
  getApprovedLeaves,
  downloadLeaveDoc
} = require('../controllers/leaveController');

router.post('/', createLeave);
router.get('/', getLeaves);
router.put('/:id', updateLeaveStatus);
router.get('/approved', getApprovedLeaves);
router.get('/document/:id', downloadLeaveDoc);

module.exports = router;
