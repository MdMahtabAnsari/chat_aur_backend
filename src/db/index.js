import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connect = async () => {
    try {
    const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}