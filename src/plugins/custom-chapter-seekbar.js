import "video.js/dist/video-js.css";

export default function customChaptersInSeekbar(player, chaptersArray) {
  // Query all elements with the class "chapter-marker" within the container

  // Initialize the chapters manually
  const chapterMarkers = chaptersArray.map((chapter) => {
    return {
      text: chapter.label,
      time: chapter.time,
    };
  });

  // Add chapter markers and tooltips to the seek bar
  // Add chapter markers and tooltips to the seek bar
  const progressControl = player.controlBar.progressControl;
  const seekBar = progressControl.seekBar.el();

  // Listen for the 'loadedmetadata' event to ensure the duration is available
  player.on("loadedmetadata", function () {
    const duration = player.duration(); // Total video duration in seconds

    chapterMarkers.forEach((chapter,index) => {
      const marker = document.createElement("div");
      marker.classList.add("chapter-marker");
      marker.id = `chapter-marker-${index}`
      marker.style.left = (chapter.time / duration) * 100 + "%";

      // Create tooltip for chapter label
      const tooltip = document.createElement("div");
      tooltip.classList.add("chapter-tooltip");
      tooltip.textContent = chapter.text;

      marker.onclick = () => {
        player.currentTime(chapter.time);
      };

      marker.appendChild(tooltip);

      seekBar.appendChild(marker);
    });
  });
}
