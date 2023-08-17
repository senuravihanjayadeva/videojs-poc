export default function customChapterList(player, playerRef, chaptersArray) {
  let prevSelectBoxContainer = document.getElementById(
    "custom-select-container-playlist"
  );
  if (prevSelectBoxContainer) {
    prevSelectBoxContainer.remove();
  }
  const selectBoxContainer = document.createElement("div");
  selectBoxContainer.id = "custom-select-container-playlist";
  selectBoxContainer.classList.add("custom-select-container");
  const selectBox = document.createElement("select");

  // Initialize the chapters manually
  const chapterMarkers = chaptersArray.map((chapter) => {
    return {
      text: chapter.label,
      time: chapter.time,
    };
  });

  const chapterOptions = chaptersArray.map((chapter, index) => {
    return {
      value: index.toString(),
      text: chapter.label,
    };
  });

  chapterOptions.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option.value;
    opt.text = option.text;
    selectBox.appendChild(opt);
  });

  selectBox.onchange = function () {
    const selectedChapterIndex = parseInt(this.value, 10);
    if (!isNaN(selectedChapterIndex)) {
      const selectedChapter = chapterMarkers[selectedChapterIndex];
      if (selectedChapter) {
        player.currentTime(selectedChapter.time);
      }
    }
  };

  selectBoxContainer.appendChild(selectBox);
  playerRef.current.controlBar.el().appendChild(selectBoxContainer);
}
