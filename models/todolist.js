const mongoose = require('mongoose');
const todolistSchema = new mongoose.Schema({
      description:{
        type: String,
        required: true
      },
      category:{
        type: String,
        required: true
      },
      duedate:{
        type: String,
        required: true
      }
});

const todolist = mongoose.model('todolist', todolistSchema);

module.exports = todolist; // to help export the schema