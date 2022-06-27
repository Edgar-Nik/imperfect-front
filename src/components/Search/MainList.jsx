import React, { useState } from "react";
import ReactPortal from "../../utils/portal";
import PlayIcon from "../common/PlayIcon";
import YoutubeEmbed from "../common/YoutubeEmbed";
import Modal from "../modal/modal";
import InfoList from "./InfoList";
const IMAGE_SRC = "https://imperfect-direct-upload-s3.s3.amazonaws.com/";

export default function MainList({ list }) {
  const [current, setCurrent] = useState(null);
  const [video, setVideo] = useState(null);

  const getVideoId = (url) => {
    var regExp =
      /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
      return match[2];
    } else {
      return "";
    }
  };

  const handlePick = (item) => {
    setCurrent(item);
  };

  const handleSelectVideo = (url) => {
    if (url) {
      setVideo(getVideoId(url));
    }
  };

  return (
    <div className="main-list">
      {list &&
        list.map((item) => (
          <div
            key={item._id}
            className={item.gif ? "user-card has-gif" : "user-card"}
            onClick={() => handlePick(item)}
          >
            <img
              loading="lazy"
              src={item.image && IMAGE_SRC + item.image}
              alt=""
              className="image"
            />
            {item.gif && (
              <img
                loading="lazy"
                src={IMAGE_SRC + item.gif}
                className="gif"
                alt=""
              />
            )}
          </div>
        ))}
      <Modal handleClose={() => setCurrent(null)} isOpen={!!current}>
        {current && (
          <div className="specialist-info">
            <div className="images">
              <div className="main-image">
                <img src={current.image && IMAGE_SRC + current.image} alt="" />
              </div>
              <div className="rest-images">
                {current.images?.length > 0 &&
                  current.images.slice(0, 3).map((image, idx) => (
                    <div key={"image" + idx} className="image-wrapper">
                      <img src={IMAGE_SRC + image} alt="" />

                      {current.images.length > 3 && (
                        <div className="rest-count">
                          <span className="plus">+</span>
                          {current.images.length - 2}
                        </div>
                      )}
                    </div>
                  ))}
              </div>
              <div className="videos">
                {current.videos?.length > 0 &&
                  current.videos.map((video, idx) => (
                    <div
                      onClick={() => handleSelectVideo(video)}
                      key={"video" + idx}
                      className="video-item-wrapper"
                    >
                      <div className="icon">
                        <PlayIcon />
                      </div>
                      <img
                        src={`https://img.youtube.com/vi/${getVideoId(
                          video
                        )}/default.jpg`}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <div className="info">
              <h4>{current.full_name && current.full_name["en"]}</h4>
              <InfoList current={current} />
            </div>
          </div>
        )}
      </Modal>

      {video && (
        <ReactPortal wrapperId="youtubeEmbed">
          <div className="video-modal">
            <div onClick={() => setVideo(null)} className="video-bg"></div>
            <div className="video-main">
              <YoutubeEmbed embedId={video} />
            </div>
          </div>
        </ReactPortal>
      )}
    </div>
  );
}
