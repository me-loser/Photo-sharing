import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const getUser = async (userId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const user = connection.collection("users").findOne({ id: userId });
  return user;
};
