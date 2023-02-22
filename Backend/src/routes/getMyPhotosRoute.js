import { getPhotosForUser } from "../db/getPhotosForUser";
export const getMyPhotosRoute = {
  method: "get",
  path: "/my-photos",
  handler: async (req, res) => {
    const user = req.user;
    const photos = await getPhotosForUser(user.user_id);

    res.status(200).json(photos);
  },
};
