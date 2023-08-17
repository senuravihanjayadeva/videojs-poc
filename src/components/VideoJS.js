import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import customChapterList from "../plugins/custom-chapter-plugin";
import "../plugins/custom-chapter-plugin.css";
import customChaptersInSeekbar from "../plugins/custom-chapter-seekbar";
import customPlaylist from "../plugins/playlist-plugin";
import playlistPopup from "../plugins/playlist-popup-plugin";
import "../plugins/playlist.css";
import "../plugins/custom-chapter-seekbar.css";


import SampleVideo360 from "../videos/sample360.mp4";
import SampleVideo720 from "../videos/sample720.mp4";
import customVideoQualityChanger from "../plugins/video-quality-plugin";

export const VideoJS = (props) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);
  const { options, onReady } = props;

  useEffect(() => {
    //Register Custom Chapter Plugin
    videojs.registerPlugin("chapters", customChapterList);
    //Register Custom Chapter Plugin
    videojs.registerPlugin("customChaptersInSeekbar", customChaptersInSeekbar);
    //Register Custom Playlist Plugin
    videojs.registerPlugin("playlists", customPlaylist);
    //Register Custom Playlist Popup Plugin
    videojs.registerPlugin("playlistPopup", playlistPopup);
    //Register Custom Video Quality Change Plugin
    videojs.registerPlugin("customVideoQualityChanger", customVideoQualityChanger);
  }, []);

  useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = document.createElement("video-js");
      videoElement.id = "video-js";
      videoElement.classList.add("video-js");
      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        onReady && onReady(player);
      }));

      //Use Custom Chapter Plugin
      //player.chapters(player, playerRef, options.chapters);

      //Use Custom Chapter in Seekbar Plugin
      //player.customChaptersInSeekbar(player, options.chapters);

      //Use Custom Playlist Plugin
      //player.playlists(player, playerRef, options.playlist);

      //Use Custom Playlist Popup Plugin
      //player.playlistPopup(player, playerRef, options.playlist);

      const sources = [
        {
          "source": SampleVideo360,
          "quality": "360p"
        },
        {
          "source": SampleVideo720,
          "quality": "720p"
        }
      ]
      
      player.customVideoQualityChanger(player, playerRef,sources)

      // Add event listener to handle quality change
      // player.on("resolutionchange", () => {
      //   const currentResolution = player.currentResolution();
      //   setSelectedQuality(currentResolution);
      // });
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
    </div>
  );
};

export default VideoJS;
