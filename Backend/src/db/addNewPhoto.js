import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();
export const addNewPhoto = async (url, title, ownerId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const newFile = { url, title, ownerId, sharedWith: [] };
  await db.getConnection().collection("photos").insertOne(newFile);
};
