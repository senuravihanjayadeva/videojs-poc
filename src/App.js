import React from "react";
import SampleVideo from "./sample.mp4";
import SampleImage from "./sample.jpeg";
// This imports the functional component from the previous sample.
import VideoJS from "./components/VideoJS";

const App = () => {
  const playerRef = React.useRef(null);
  let playlist = [
    {
      sources: [
        {
          src: "http://techslides.com/demos/sample-videos/small.mp4",
          type: "video/mp4",
        },
      ],
      title: "Video One",
      poster: SampleImage,
    },
    {
      sources: [
        {
          src: "http://vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4",
        },
      ],
      title: "Video Two",
      poster: SampleImage,
    },
    {
      sources: [
        {
          src: "http://techslides.com/demos/sample-videos/small.mp4",
          type: "video/mp4",
        },
      ],
      title: "Video Three",
      poster: SampleImage,
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/video/movie_300.mp4",
          type: "video/mp4",
        },
      ],
      title: "Video Four",
      poster: SampleImage,
    },
    {
      sources: [
        {
          src: "http://vjs.zencdn.net/v/oceans.mp4",
          type: "video/mp4",
        },
      ],
      title: "Video Five",
      poster: SampleImage,
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/bunny/movie.mp4",
          type: "video/mp4",
        },
      ],
      title: "Video Six",
      poster: SampleImage,
    },
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/video/movie_300.mp4",
          type: "video/mp4",
        },
      ],
      title: "Video Seven",
      poster: SampleImage,
    },
  ];
  const chapters = [
    { label: "Chapter 1", time: "0" },
    { label: "Chapter 2", time: "5" },
    { label: "Chapter 3", time: "10" },
    { label: "Chapter 4", time: "15" },
    { label: "Chapter 5", time: "20" },
    { label: "Chapter 6", time: "25" },
    { label: "Chapter 7", time: "30" },
  ];
  const videoJsOptions = {
    playlist: playlist,
    chapters: chapters,
    autoplay: true,
    controls: true,
    responsive: true,
    poster: SampleImage,
    playbackRates: [0.5, 1, 1.5, 2],
    controlBar: {
      skipButtons: {
        backward: 10,
      },
    },
    fluid: true,
    sources: [
      {
        src: SampleVideo,
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      // videojs.log('player is waiting');
    });

    player.on("dispose", () => {
      // videojs.log('player will dispose');
    });
  };

  return (
    <div style={{ padding: "10%" }}>
      <div>Rest of app here</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </div>
  );
};

export default App;
