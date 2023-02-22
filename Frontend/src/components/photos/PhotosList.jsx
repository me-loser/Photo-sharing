import PhotosListItem from "./PhotosListItem";
import NewPhotoButton from "./NewPhotoButton";
const PhotosList = ({ isLoading, photos, showNewButton }) =>
  isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="photos-list">
      {photos.map((photo) => (
        <PhotosListItem key={photo._id} photo={photo} />
      ))}
      {showNewButton && <NewPhotoButton />}
    </div>
  );

export default PhotosList;
