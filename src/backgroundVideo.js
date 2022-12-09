import { useRef } from "react";
import { MeInTheBackDiv } from "./styles/myStyles";

const BackgroundVideo = ({ muteMe, tickleMe, setLoaded, setWait4MeWidth }) => {
  const refMeUp = useRef(null);
  if (refMeUp.current) {
    if (tickleMe) {
      refMeUp.current.play();
    } else {
      refMeUp.current.pause();
    }
  }
  const handleProgress = () => {
    const video = refMeUp.current;
    if (video) {
      const loadedPercent = video.buffered.end(0) / video.duration
      if (loadedPercent < 0.25) return setWait4MeWidth(loadedPercent * 400);
      return setLoaded(true);
    }
    return null;
  }
  const videoSource =
    "https://drive.google.com/uc?id=11fKiSBYtC-5q3xiuevY3Qd6m-Y-SE2vS";
  return (
    <MeInTheBackDiv>
      <video
        ref={refMeUp}
        autoPlay={tickleMe}
        loop
        muted={muteMe}
        onProgress={handleProgress}
        playsInline
      >
        <source src={videoSource} type="video/mp4" />
      </video>
    </MeInTheBackDiv>
  );
};

export default BackgroundVideo;
