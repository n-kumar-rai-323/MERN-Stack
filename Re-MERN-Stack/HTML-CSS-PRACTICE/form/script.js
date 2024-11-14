document.querySelector(".toggle").addEventListener("click", function (event) {
    if (document.fullscreenElement) {
      // If there is a fullscreen element, exit full screen.
      document.exitFullscreen();
      return;
    }
    // Make the .element div fullscreen.
    document.querySelector(".element").requestFullscreen();
  });