const iframe = document.querySelector("iframe");
const player = new Vimeo.Player(iframe);
import { throttle } from "lodash";
player.on(
  "timeupdate",
  throttle((data) => {
    localStorage.setItem("videoplayer-current-time", data.seconds);
    console.log(localStorage.getItem("videoplayer-current-time"));
  }, 1000)
);

player.getVideoTitle().then(function (title) {
  console.log("title:", title);
});

player
  .setCurrentTime(localStorage.getItem("videoplayer-current-time"))
  .catch((error) => {
    switch (error.name) {
      case "RangeError":
        break;

      default:
        break;
    }
  });
