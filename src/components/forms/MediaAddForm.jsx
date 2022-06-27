import { Button, Stack, FormControl, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateSpecialist,
  uploadGif,
  uploadImages,
} from "../../services/specialists";
import { setErrorAllert, setSuccessAllert } from "../../store/alertReducer";
import SpinnerLoader from "../common/SpinnerLoader";
import KeywordInput from "../filters/KeywordInput";

export default function MediaAddForm({ currentId, category, loading }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [images, setImages] = useState(null);
  const [videos, setVideos] = useState(null);
  const [imageLoading, setImageLoading] = useState(false);
  const [gif, setGif] = useState("");
  const [previews, setPreviews] = useState([]);
  const [gifPreview, setGifPreview] = useState([]);

  const handleChangeImages = (e) => {
    const fileObj = [];
    const fileArray = [];
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }

    setImages(fileObj);
    setPreviews(fileArray);
  };

  const handleChangeGif = (e) => {
    const fileObj = [];
    const fileArray = [];
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }

    setGif(fileObj);
    setGifPreview(fileArray);
  };
  const handleSubmit = async () => {
    try {
      setImageLoading(true);
      if (images && images[0]) {
        await uploadImages(currentId, category, images[0]);
        setImages(null);
      }
      if (gif) {
        await uploadGif(currentId, category, gif[0]);
        setGif(null);
      }
      if (videos?.length) {
        await updateSpecialist(category, currentId, { videos: videos });
      }
      dispatch(setSuccessAllert("Successfully saved!"));
      navigate(`/search/${category}`);
    } catch (e) {
      dispatch(setErrorAllert("Something went wrong!"));
    } finally {
      setImageLoading(false);
    }
  };

  return (
    <Stack spacing={2}>
      <FormControl fullWidth>
        <Typography sx={{ marginBottom: "8px" }} variant="subtitle1">
          Images
        </Typography>
        <Button variant="outlined" component="label">
          Upload Image
          <input
            type="file"
            accept="image/jpeg, image/png"
            hidden
            onChange={(e) => handleChangeImages(e)}
            multiple
          />
        </Button>
      </FormControl>
      {previews && (
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {previews.map((image, idx) => (
            <img
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain",
                marginRight: "10px",
                marginBottom: "10px",
              }}
              key={idx}
              src={image}
            />
          ))}
        </Box>
      )}

      <FormControl fullWidth>
        <Typography sx={{ marginBottom: "8px" }} variant="subtitle1">
          GIF
        </Typography>
        <Button variant="outlined" component="label">
          Upload GIF
          <input
            onChange={(e) => handleChangeGif(e)}
            type="file"
            accept="image/gif"
            hidden
          />
        </Button>
      </FormControl>
      {gifPreview && (
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {gifPreview.map((image, idx) => (
            <img
              style={{
                width: "90px",
                height: "90px",
                objectFit: "contain",
                marginRight: "10px",
                marginBottom: "10px",
              }}
              key={idx}
              src={image}
            />
          ))}
        </Box>
      )}
      <FormControl fullWidth>
        <Typography sx={{ marginBottom: "8px" }} variant="subtitle1">
          Youtube Videos
        </Typography>
        <KeywordInput
          pickedItemWidth={500}
          handleChange={setVideos}
          filterItem={{ title: "" }}
          value={videos}
        />
      </FormControl>
      <Box sx={{ paddingTop: "32px", width: "100%" }}>
        <Button
          disabled={loading || imageLoading}
          fullWidth
          onClick={handleSubmit}
          variant="contained"
        >
          {loading || imageLoading ? <SpinnerLoader size={20} /> : "Submit"}
        </Button>
      </Box>
    </Stack>
  );
}
