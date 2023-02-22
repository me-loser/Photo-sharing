import { getMyPhotosRoute } from "./getMyPhotosRoute";
import { uploadPhotoRoute } from "./uploadPhotoRoute";
import { getSharedPhotosRoute } from "./getSharedPhotosRoute";
import { getPhotoRoute } from "./getPhotoRoute";
import { shareWithEmailRoute } from "./shareWithEmailRoute";
export { protectRouteMiddleware } from "./protectRouteMiddleware";
export const routes = [
  getMyPhotosRoute,
  getSharedPhotosRoute,
  uploadPhotoRoute,
  getPhotoRoute,
  shareWithEmailRoute,
];
