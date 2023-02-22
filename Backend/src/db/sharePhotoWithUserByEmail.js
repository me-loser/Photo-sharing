import { db } from "./db";
import { ObjectId } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

export const sharePhotoWithUserByEmail = async (photoId, email) => {
  await db.connect(process.env.MONGODB_URL);
  const connection = db.getConnection();
  const user = await connection.collection("users").findOne({ email });
  if (user) {
    await connection.collection("photos").updateOne(
      { _id: new ObjectId(photoId) },
      {
        $addToSet: { sharedWith: user.id },
      }
    );
  }
  // $ addToSet is like push but addToSet adds without duplicating
};
