import { useProtectedResources } from "../data/useProtectedResources";
import MyPhotosList from "./PhotosList";
import PhotosList from "./PhotosList";
const BrowsePhotosPage = () => {
  const { isLoading: isLoadingMyPhotos, data: myPhotos } =
    useProtectedResources("http://localhost:8080/my-photos/", []);
  const { isLoading: isLoadingSharedPhotos, data: sharedPhotos } =
    useProtectedResources("http://localhost:8080/shared/", []);
  console.log(sharedPhotos);

  return (
    <div>
      <h2 className="section-heading">My Photos</h2>
      <MyPhotosList
        isLoading={isLoadingMyPhotos}
        photos={myPhotos}
        showNewButton={true}
      />
      <h2 className="section-heading">Shared With Me</h2>
      <PhotosList
        isLoading={isLoadingSharedPhotos}
        photos={sharedPhotos}
        showNewButton={false}
      />
    </div>
  );
};
export default BrowsePhotosPage;
