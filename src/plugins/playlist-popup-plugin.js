export default function playlistPopup(player, playerRef, list) {
  // Adding button to the control bar
  var myButton = player.controlBar.addChild("button", {}, 0);

  // Create our button's DOM Component
  var myButtonDom = myButton.el();

  myButtonDom.innerHTML = '<span class="vjs-icon-cancel"></span>';

  // Setting control text for the button hover effect
  myButton.controlText("My Cancel Button");

  // Create the popup element
  let popup = document.createElement("div");
  popup.id = "popup-panel";
  popup.className = "playlist-popup-panel";

  list.forEach((item, index) => {
    let divGrid = document.createElement("div");
    divGrid.className = "popup-div-grid";
    let paragraph = document.createElement("p");
    paragraph.innerHTML = item.title;
    // Append the paragraphs to the popup element
    divGrid.appendChild(paragraph);
    divGrid.onclick = () => {
      playerRef.current.playlist.currentItem(index);
      popup.remove();
      return false;
    };
    popup.appendChild(divGrid);
  });

  // Setting the control button click function
  myButtonDom.onclick = function () {
    const videoDoc = document.getElementById("video-js");
    const existingPopup = videoDoc.querySelector("#popup-panel");
    if (existingPopup) {
      videoDoc.removeChild(existingPopup);
    } else {
      videoDoc.appendChild(popup);
    }
  };
}