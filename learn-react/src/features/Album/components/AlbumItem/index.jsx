import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired,
};

AlbumItem.defaultProps = {
  album: {},
};

function AlbumItem({ album }) {
  return (
    <li className="album-item">
      <div className="img">
        <img src={album?.thumbnailUrl} alt="" />
      </div>
      <p className="title">{album?.title}</p>
    </li>
  );
}

export default AlbumItem;
