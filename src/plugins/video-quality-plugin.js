export default function customVideoQualityChanger(player, playerRef, sourceList) {
  const selectBoxContainer = document.createElement("div");
  selectBoxContainer.classList.add("custom-select-container");
  const selectBox = document.createElement("select");

  sourceList.forEach((option) => {
    const opt = document.createElement("option");
    opt.value = option.src;
    opt.text = option.quality;
    selectBox.appendChild(opt);
  });

  selectBox.onchange = function () {
    const source = this.value;
    const player = playerRef.current;
    console.log(source);
    player.src(source);
  };

  selectBoxContainer.appendChild(selectBox);
  playerRef.current.controlBar.el().appendChild(selectBoxContainer);
}
