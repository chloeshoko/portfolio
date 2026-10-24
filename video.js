// Plays a video in place of its thumbnail. Only one plays at a time.
document.querySelectorAll(".work.video li").forEach((item) => {
  const button = item.querySelector(".play");

  button.addEventListener("click", () => {
    const playing = document.querySelector(".work.video li.playing");
    if (playing) {
      playing.querySelector(".player").remove();
      playing.classList.remove("playing");
    }

    const player = document.createElement("div");
    player.className = "player";
    const frame = document.createElement("iframe");
    frame.src = item.dataset.embed + "?autoplay=1";
    frame.title = button.getAttribute("aria-label").replace(/^Play /, "");
    frame.allow = "autoplay; fullscreen; picture-in-picture; encrypted-media";
    frame.allowFullscreen = true;
    player.append(frame);

    item.prepend(player);
    item.classList.add("playing");
    frame.focus();
  });
});
