import mongoose from "mongoose";
const URL = "mongodb://localhost:27017/myblog";
const Connection = async () => {
  try {
    mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`Database connected at ${URL}`);
  } catch (error) {
    console.log("error");
  }
};

export default Connection;
