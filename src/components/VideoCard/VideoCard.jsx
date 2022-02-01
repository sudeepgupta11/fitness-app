import * as React from "react";
import { CardActionArea, Typography, CardContent, Card } from "@mui/material";
import ReactPlayer from "react-player/lazy";

// Render a YouTube video player
export default function VideoCard(props) {
  return (
    <Card>
      <CardActionArea>
        <div className="video-responsive">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${props.item.videoLink}`}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
