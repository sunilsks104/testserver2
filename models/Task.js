const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'must provide'],
    trim: true,
    maxlength: [20, 'name can not be more than 20 characters'],
  },
  rfidnumber: {
    type: String,
    required: [true, 'must provide'],
  },
  emergencycontact: {
    type: Number,
    required: [true, 'Contact number must provide'],
    maxlength: [10, 'Number can not be more than 10 characters'],
  },
});

module.exports = mongoose.model('Task', TaskSchema);
