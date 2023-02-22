import { Link } from "react-router-dom";
const PhotosListItem = ({ photo }) => (
  <Link to={`/photos/${photo._id}`}>
    <div className="photos-list-item-wrap">
      <img
        src={`http://localhost:8080${photo.url}`}
        alt=""
        className="photos-list-item"
        height="200"
        width="200"
      />
    </div>
  </Link>
);

export default PhotosListItem;
