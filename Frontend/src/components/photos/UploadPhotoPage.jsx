import { uploadFile } from "../data/uploadFile";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const UploadPhotoPage = () => {
  const [titleValue, setTitleValue] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const navigate = useNavigate();

  const beginUpload = async () => {
    const formData = new FormData();
    formData.append("title", titleValue);
    formData.append("file", selectedFile);
    const response = await uploadFile(
      "http://localhost:8080/upload/",
      formData
    );
    console.log(response);
    alert("succesfully uploaded photo!");
    navigate("/");
  };
  return (
    <div className="centered-container">
      <h1>Upload A New Photo</h1>
      <label>
        Title:
        <input
          type="text"
          placeholder="Enter a title for the new photo"
          className="full-width space-after"
          value={titleValue}
          onChange={(e) => setTitleValue(e.target.value)}
        />
      </label>
      <input
        type="file"
        className="full-width space-after"
        accept="image/png, image/jpg, image/jpeg"
        onChange={(e) => {
          const file = e.target.files[0];
          setSelectedFile(file);
        }}
      />
      <button className="full-width" onClick={beginUpload}>
        Upload
      </button>
    </div>
  );
};

export default UploadPhotoPage;
