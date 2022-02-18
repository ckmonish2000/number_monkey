import { useState, useEffect } from "react"
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer"
import Router from "./utils/Router"
import "./styles/app.css"
import Frog from "./Scenes/intro/frog";
// import Animation from "./Scenes/Animations/Animations";
// import Trace from "./Scenes/trace/Trace";

function App() {
  const [Load, setLoad] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, []);


  if (Load) return <div className="intro_Loading_screen">Loading....</div>

  return (
    <GameContainer>
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
