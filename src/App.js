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
          src: "http://media.w3.org/2010/05/video/movie_300.mp4",
          type: "video/mp4",
        },
      ],
      title: "Video Seven",
      poster: SampleImage,
    },
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
  ];
  const chapters = [
    { label: "Chapter 1", time: "0" },
    { label: "Chapter 2", time: "20" },
    { label: "Chapter 3", time: "40" },
    { label: "Chapter 4", time: "70" },
    { label: "Chapter 5", time: "120" },
    { label: "Chapter 6", time: "200" },
    { label: "Chapter 7", time: "250" },
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
    <div style={{ padding: "5% 10%" }}>
      <h3>Demo App - CloudFlicks</h3>
      <hr />
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
    </div>
  );
};

export default App;
