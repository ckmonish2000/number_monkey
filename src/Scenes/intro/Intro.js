import { useContext } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import IntroMap from './AssetMap';
import "../../styles/intro.css"


export default function Intro() {
  const { Bg, Loading } = useLoadAsset(IntroMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets

  console.log(intro?.sounds[0])
  return <Scenes
    Bg={Bg}
    sprites={
      <>
        {/* Title */}
        <img
          alt="txt"
          className="dressing_txt_img"
          src={`data:image/svg+xml;utf8,${encodeURIComponent(intro?.sprites[0])}`} />

        <button
          className="play_btn"
          onClick={() => { PlayAudio(intro?.sounds[0]) }}>
          Play
        </button>
      </>
    }
  />;
}
