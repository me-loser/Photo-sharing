import { db } from "./db";
import dotenv from "dotenv";
dotenv.config();

export const getSharedPhotosWithUser = async (userId) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const sharedPhotos = await connection
    .collection("photos")
    .find({ sharedWith: userId })
    .toArray();
  // This will automatically see if userId is contained in sharedWith array
  return sharedPhotos;
};
