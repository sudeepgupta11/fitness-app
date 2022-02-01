import React from "react";
import { listData } from "./../assets/listData";
import DraggableList from "./List/DraggableList";
import VideoCard from "./VideoCard/VideoCard";

function MyVideo() {
  return (
    <>
      <DraggableList
        data={listData}
        renderItemContent={(item) => LessonCard(item)}
      />
    </>
  );
}
const LessonCard = (item) => <VideoCard item={item} />;

export default MyVideo;
