import React from "react";
import { useParams } from "react-router-dom";
import { useUser } from "../auth/useUser";
import { useProtectedResources } from "../data/useProtectedResources";
import { postWithCredentials } from "../data/postWithCredentials";
import SharedEmailsList from "./SharedEmailsList";

const PhotoDetailPage = () => {
  const { id } = useParams();
  const { user } = useUser();
  const {
    isLoading,
    data: photo,
    setData: setPhoto,
  } = useProtectedResources(`http://localhost:8080/photos/${id}`, {});
  const userIsOwner = user.uid === photo.ownerId;
  const shareWithEmail = async (email) => {
    const response = await postWithCredentials(
      `http://localhost:8080/photos/${id}/shared-with`,
      { email }
    );
    const updatedPhoto = await response.json();
    setPhoto(updatedPhoto);
  };
  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <div className="centered-container">
      <h1>{photo.title}</h1>
      <img src={`http://localhost:8080${photo.url}`} width="750" />
      <div>
        {userIsOwner && (
          <SharedEmailsList
            emails={photo.sharedWithEmails}
            onShare={shareWithEmail}
          />
        )}
      </div>
    </div>
  );
};

export default PhotoDetailPage;
