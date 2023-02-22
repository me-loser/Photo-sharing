import { ObjectId } from "mongodb";
import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const getPhoto = async (photoId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const photo = connection
    .collection("photos")
    .findOne({ _id: new ObjectId(photoId) });
  return photo;
};
