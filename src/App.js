import React from "react";
import VideoJS from "./components/VideoJS";
import SampleVideo360 from "./videos/sample360.mp4";
import SampleVideo720 from "./videos/sample720.mp4";
import SampleImage from "./sample.jpeg";

const App = () => {
  const playerRef = React.useRef(null);
  let playlist = [
    {
      sources: [
        {
          src: "http://media.w3.org/2010/05/video/movie_300.mp4",
          type: "video/mp4",
          quality: "360p",
          chapters: [
            { label: "Chapter 1", time: "0" },
            { label: "Chapter 2", time: "20" },
            { label: "Chapter 3", time: "40" },
            { label: "Chapter 4", time: "90" },
            { label: "Chapter 5", time: "120" },
            { label: "Chapter 6", time: "150" },
            { label: "Chapter 7", time: "170" },
          ]
        },
      ],
      title: "Video Intial",
      poster: SampleImage,
    },
    {
      sources: [
        {
          src: "http://techslides.com/demos/sample-videos/small.mp4",
          type: "video/mp4",
          quality: "360p",
          chapters: [
            { label: "Chapter 1", time: "0" },
            { label: "Chapter 2", time: "3" },
          ]
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

  const videoJsOptions = {
    // playlist: playlist,
    autoplay: true,
    controls: true,
    responsive: true,
    poster: SampleImage,
    language: 'pt', // Set the language to Spanish
    playbackRates: [0.5, 1, 1.5, 2, 2.5,3],
    controlBar: {
      skipButtons: {
        backward: 10,
        forward: 10,
      },
    },
    fluid: true,
    sources: [
      {
        src: SampleVideo360,
        type: "video/mp4",
        quality: "360p",
        chapters: [
          { label: "Chapter 1", time: "0" },
          { label: "Chapter 2", time: "20" },
          { label: "Chapter 3", time: "40" },
          { label: "Chapter 4", time: "60" },
          { label: "Chapter 5", time: "90" },
          { label: "Chapter 6", time: "110" },
          { label: "Chapter 7", time: "140" },
        ]
      },
      {
        src: SampleVideo720,
        type: "video/mp4",
        quality: "720p",
        chapters: [
          { label: "Chapter 1", time: "0" },
          { label: "Chapter 2", time: "20" },
          { label: "Chapter 3", time: "40" },
          { label: "Chapter 4", time: "60" },
          { label: "Chapter 5", time: "90" },
          { label: "Chapter 6", time: "110" },
          { label: "Chapter 7", time: "140" },
        ]
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
