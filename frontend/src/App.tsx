import { useState } from "react";
import "./App.css";
import {
  MediaMuteButton,
  MediaPlayer,
  MediaPlayButton,
  MediaOutlet,
} from "@vidstack/react";
import beep from "./assets/audio/timer_beep.wav";

function App() {
  return (
    <div style={{ height: "100vh", display: "flex" }}>
      <MediaPlayer src={beep}>
        <MediaOutlet>
          <MediaPlayButton></MediaPlayButton>
          <MediaMuteButton />
        </MediaOutlet>
      </MediaPlayer>
    </div>
  );
}

export default App;
