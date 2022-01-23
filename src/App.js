import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer"
import Router from "./utils/Router"

function App() {
  return (
    <GameContainer>
      <Router sceneId="/">
        <Intro />
      </Router>
    </GameContainer>
  );
}

export default App;
