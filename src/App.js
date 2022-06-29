import { useState, useEffect, useContext } from "react"
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
import { SceneContext } from "./contexts/SceneContext";
import FrogEndMap from "./Scenes/EndScenes/frogEndMap";
import MonkeyEndMap from "./Scenes/EndScenes/MonkeyEndMap";
import IntroMap from "./Scenes/intro/AssetMap"
import FrogMap from "./Scenes/intro/frogAssetmap";
import SelectMap from "./Scenes/select/selectMap"
import HomeMap from "./Scenes/HomeMap";
import useAllAsset from "./utils/useAllAssets";
// import Animation from "./Scenes/Animations/Animations";
// import Trace from "./Scenes/trace/Trace";

function App() {
  const [Load, setLoad] = useState(true);
  const [BG_sound, setBG_sound] = useState(null)
  const [icon1, seticon1] = useState("")
  const [icon2, seticon2] = useState("")
  const [playing, setplaying] = useState(false)
  const [mute, setmute] = useState(false)
  const { SceneId, setLandScape, setIpad, LandScape } = useContext(SceneContext);

  const Map = [FrogEndMap, MonkeyEndMap, IntroMap, FrogMap, SelectMap, HomeMap]
  const Asset = useAllAsset(Map)

  const resizer = () => {
    setIpad(window.innerWidth / window.innerHeight >= 1.3 && window.innerWidth / window.innerHeight <= 1.44)
    setLandScape(window.innerWidth / window.innerHeight < 1.0)
  }

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)

    loadAudio()

    window.addEventListener("resize", resizer)
    setIpad(window.innerWidth / window.innerHeight >= 1.3 && window.innerWidth / window.innerHeight <= 1.44)

    return () => {
      window.removeEventListener("resize", resizer)
    }
  }, []);


  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("ee02_nt_1to10_brn/sounds/bg_sound.mp3"))
    seticon1(await LoadImage("ee02_nt_1to10_brn/images/sound.svg"))
    seticon2(await LoadImage("ee02_nt_1to10_brn/images/nosound.svg"))

  }

  useEffect(() => {
    if (BG_sound !== null && SceneId !== "/home" && playing === false) {
      // BG_sound?.play()
      setplaying(true)
    }
  }, [BG_sound, SceneId])

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


  if (Asset?.Loading || Load) return <div className="loadingIndicator">
    <div className="vendorWrapper"></div>
    <div className="playerPreloader">
      <div className="playerPreloadCircle"></div>
    </div>
  </div>

  console.log(Asset?.Loading)
  return (
    <>
      <h1 style={{ display: LandScape ? "" : "none" }} id="landscapeMode">Rotate your device</h1>

      <div style={{ opacity: LandScape ? 0 : 1 }}>
        <GameContainer>
          {!mute && SceneId !== "/home" && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`} alt="" className="mute_btn" onClick={toggleMute} />}
          {mute && SceneId !== "/home" && <img src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`} alt="" className="mute_btn" onClick={toggleMute} />}

          <Router sceneId="/home">
            <Home play={() => BG_sound?.play()} />
          </Router>

          <Router sceneId="/select">
            <Select />
          </Router>

          <Router sceneId="/fend">
            <FrogEnd stop={() => { BG_sound?.stop() }} />
          </Router>

          <Router sceneId="/mend">
            <MonkeyEnd stop={() => { BG_sound?.stop() }} />
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
      </div>
    </>
  );
}

export default App;
