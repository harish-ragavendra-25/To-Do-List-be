const mongoose = require('mongoose');
const { Schema } = mongoose;

const todoListSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default:false
    },
  },
  {
    collection: 'todoList',
  }
);

module.exports = mongoose.model('todoList', todoListSchema);
