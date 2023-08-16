import React from 'react';
import SampleVideo from "./sample.mp4"
import SampleImage from "./sample.jpeg"
// This imports the functional component from the previous sample.
import VideoJS from './components/VideoJS'

const App = () => {
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    poster:SampleImage,
    playbackRates: [0.5, 1, 1.5, 2],
    controlBar: {
      skipButtons: {
        backward: 10
      }
    },
    fluid: true,
    sources: [{
      src: SampleVideo,
      type: 'video/mp4'
    }]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      // videojs.log('player is waiting');
    });

    player.on('dispose', () => {
      // videojs.log('player will dispose');
    });
  };

  return (
    <div style={{padding: "10%"}}>
      <div>Rest of app here</div>
      <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      <div>Rest of app here</div>
    </div>
  );
}

export default App;