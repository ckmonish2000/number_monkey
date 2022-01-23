import { useContext, useRef, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import IntroMap from './AssetMap';
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';


export default function Intro() {
  const { Bg, Loading } = useLoadAsset(IntroMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets.intro && Ref.current && !Loading) {
      const ch = lottie.loadAnimation({
        name: "placeholder",
        container: Ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: intro?.lottie[0],
      })
    }
  }, [Assets, Loading])

  return <Scenes
    Bg={Bg}
    sprites={
      <>
        {/* Title */}

        <Image
          src={intro?.sprites[0]}
          alt="txt"
          id="fadeup"
          className="dressing_txt_img" />
        {/* {intro?.sprites[0] && <img
          alt="txt"
          id="fadeup"
          className="dressing_txt_img"
          src={`data:image/svg+xml;utf8,${encodeURIComponent(intro?.sprites[0])}`} />} */}

        <button
          className="play_btn"
          onClick={() => { PlayAudio(intro?.sounds[0]) }}>
          Play
        </button>

        <div ref={Ref} className="intro_lottie_container"></div>
      </>
    }
  />;
}
