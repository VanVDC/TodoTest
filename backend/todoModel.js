import mongoose from 'mongoose';

const todoSchema = mongoose.Schema(
  {
    todo: {
      type: String,
      require: true,
    },
    complete: {
      type: String,
      default: 'false',
    },
  },
  { timestamps: true }
);

const todoModel = mongoose.model('Todo', todoSchema);

export default todoModel;
