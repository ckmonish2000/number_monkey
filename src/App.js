import { useState, useEffect } from "react"
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer"
import Router from "./utils/Router"
import "./styles/app.css"
import Frog from "./Scenes/intro/frog";
import Select from "./Scenes/select/Select";
import Home from "./Scenes/Home";
import FrogEnd from "./Scenes/EndScenes/FrogEnd";
import MonkeyEnd from "./Scenes/EndScenes/MonkeyEnd";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";
// import Animation from "./Scenes/Animations/Animations";
// import Trace from "./Scenes/trace/Trace";

function App() {
  const [Load, setLoad] = useState(true);
  const [BG_sound, setBG_sound] = useState(null)
  const [icon1, seticon1] = useState("")
  const [icon2, seticon2] = useState("")
  const [mute, setmute] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)

    loadAudio()
  }, []);


  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("internal/sounds/bg_sound.mp3"))
    seticon1(await LoadImage("internal/images/sound.svg"))
    seticon2(await LoadImage("internal/images/nosound.svg"))

  }

  useEffect(() => {
    if (BG_sound !== null) {
      BG_sound?.play()
    }
  }, [BG_sound])

  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true)
      } else {
        BG_sound?.mute(false)
      }
    }
  }, [mute])

  const toggleMute = () => { setmute(!mute) }


  if (Load) return <div className="intro_Loading_screen">Loading....</div>


  return (
    <GameContainer>
      {!mute && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`} alt="" className="mute_btn" onClick={toggleMute} />}
      {mute && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`} alt="" className="mute_btn" onClick={toggleMute} />}

      <Router sceneId="/home">
        <Home />
      </Router>

      <Router sceneId="/select">
        <Select />
      </Router>

      <Router sceneId="/fend">
        <FrogEnd />
      </Router>

      <Router sceneId="/mend">
        <MonkeyEnd />
      </Router>

      <Router sceneId="/">
        <Intro />
      </Router>

      <Router sceneId="/frog">
        <Frog />
      </Router>

      {/* <Router sceneId="/Summer">
        <Animation sceneName="summer" />
      </Router> */}



    </GameContainer>
  );
}

export default App;
