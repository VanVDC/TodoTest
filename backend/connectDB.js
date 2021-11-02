import mongoose from 'mongoose';

const connect = async () => {
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://pressure:pressure@cluster0.k7xfp.mongodb.net/todo',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connect;
