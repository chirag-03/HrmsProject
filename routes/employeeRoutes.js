const express = require('express');
const router = express.Router();
const {
  getEmployees,
  updateEmployee,
  deleteEmployee,
  assignRole
} = require('../controllers/employeeController');

router.get('/', getEmployees);
router.put('/:id', updateEmployee);
router.delete('/:id', deleteEmployee);
router.post('/assign-role/:id', assignRole);

module.exports = router;
