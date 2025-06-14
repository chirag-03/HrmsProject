const express = require('express');
const router = express.Router();
const {
  createCandidate,
  getCandidates,
  updateCandidate,
  deleteCandidate,
  downloadResume,
  moveToEmployee
} = require('../controllers/candidateController');

router.post('/', createCandidate);
router.get('/', getCandidates);
router.put('/:id', updateCandidate);
router.delete('/:id', deleteCandidate);
router.get('/resume/:id', downloadResume);
router.post('/promote/:id', moveToEmployee);

module.exports = router;
