import React, { useRef, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "videojs-playlist";

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      
      // Adding button to the control bar
      var myButton = player.controlBar.addChild("button", {}, 0);

      // Create our button's DOM Component
      var myButtonDom = myButton.el();

      myButtonDom.innerHTML = '<span class="vjs-icon-cancel"></span>';

      // Setting control text for the button hover effect
      myButton.controlText("My Cancel Button");

      // Setting the control button click function
      myButtonDom.onclick = function () {
        alert("Cancel Button Clicked!");
      };

      // Add playlist functionality
      player.playlist(options.playlist);

      // Load the playlist
      player.playlist.currentItem(0); // Start playing the first video in the playlist

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef]);

  useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player>
      <div ref={videoRef} />
      <div>
        <ul>
          {options.playlist.map((item, index) => (
            <li
              key={index}
              onClick={() => playerRef.current.playlist.currentItem(index)}
            >
              <h3>{item.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoJS;
