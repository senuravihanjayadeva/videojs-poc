import "videojs-playlist";

export default function customPlaylist(player, playerRef, list) {
  // Add playlist functionality
  player.playlist(list);

  // Load the playlist
  player.playlist.currentItem(0); // Start playing the first video in the playlist

  const selectBoxContainer = document.createElement("div");
  selectBoxContainer.classList.add("custom-select-container");
  const selectBox = document.createElement("select");

  list.forEach((option, index) => {
    const opt = document.createElement("option");
    opt.value = index;
    opt.text = option.title;
    selectBox.appendChild(opt);
  });

  selectBox.onchange = function () {
    const selectedIndex = parseInt(this.value, 10);

    //This is for chapter select box plugin
    if (list[selectedIndex].sources[0].chapters) {
      player.chapters(
        player,
        playerRef,
        list[selectedIndex].sources[0].chapters
      );
    }

    playerRef.current.playlist.currentItem(selectedIndex);
  };

  selectBoxContainer.appendChild(selectBox);
  playerRef.current.controlBar.el().appendChild(selectBoxContainer);
}
