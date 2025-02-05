import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DataBase Connected");
  } catch (error) {
    console.log(error);
  }
};
export default Connection;