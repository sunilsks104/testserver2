const express = require('express');
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
  editTask,
  createTaskbyparams,
} = require('../controllers/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask);
router
  .route('/create/:name/:rfidnumber/:emergencycontact')
  .get(createTaskbyparams);

module.exports = router;
