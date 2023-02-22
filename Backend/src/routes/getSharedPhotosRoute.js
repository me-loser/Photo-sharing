import { getSharedPhotosWithUser } from "../db/getSharedPhotosWithUser";
export const getSharedPhotosRoute = {
  method: "get",
  path: "/shared",
  handler: async (req, res) => {
    const user = req.user;
    const sharedPhotos = await getSharedPhotosWithUser(user.user_id);
    res.status(200).json(sharedPhotos);
  },
};
