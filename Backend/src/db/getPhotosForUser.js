import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();
export const getPhotosForUser = async (userId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const photos = connection
    .collection("photos")
    .find({ ownerId: userId })
    .toArray();
  return photos;
};
