import React from "react";
import AlbumList from "./components/AlbumList";

function AlbumFeatures() {
  const albumList = [
    {
      id: 1,
      title: "Nhạc Cho Thứ Bảy",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/0/b/8/c0b80cd2ebe754aece9f4fc3ad219c50.jpg",
    },
    {
      id: 2,
      title: "V-Pop Đầy Hứa Hẹn",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/2/9/7/92977718b3a7190ac4ff9eb89527556a.jpg",
    },
    {
      id: 3,
      title: "Hot Hits Vietnam",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/c/5/3/0/c530cb944e470e098de37fc5e40c67d0.jpg",
    },
    {
      id: 4,
      title: "Everyday EDM",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/9/b/5/f/9b5f82d251ba4d6c697b779d40482465.jpg",
    },
    {
      id: 5,
      title: "Pop All Stars",
      thumbnailUrl:
        "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/3/3/2/4332effbb455e8e0c4dcb3eda0e7e197.jpg",
    },
  ];

  return (
    <div className="album">
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeatures;
