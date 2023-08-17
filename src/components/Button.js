function buttonClick(player) {
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
}
