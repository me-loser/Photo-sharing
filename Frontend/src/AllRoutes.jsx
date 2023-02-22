import { Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/PrivateRoute";
import SignInPage from "./components/auth/SignInPage";
import PhotoDetailPage from "./components/photos/PhotoDetailPage";
import UploadPhotoPage from "./components/photos/UploadPhotoPage";
import BrowsePhotosPage from "./components/photos/BrowsePhotosPage";

const routes = [
  {
    path: "/sign-in",
    Component: SignInPage,
  },
  {
    path: "/",
    Component: BrowsePhotosPage,
    exact: true,
    private: true,
  },
  {
    path: "/upload-photo",
    Component: UploadPhotoPage,
    private: true,
  },
  {
    path: "photos/:id",
    Component: PhotoDetailPage,
    private: true,
  },
];
export const AllRoutes = ({ isLoading, user }) => (
  <Routes>
    {routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          element={
            route.private ? (
              <PrivateRoute
                isLoading={isLoading}
                isAuthed={!!user}
                Component={route.Component}
              />
            ) : (
              <route.Component></route.Component>
            )
          }
        ></Route>
      );
    })}
  </Routes>
);
