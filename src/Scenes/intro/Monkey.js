import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/monkey.css"
import MonkeyMap from './MonkeyMap';


export default function Monkey() {
  const { Bg, Loading } = useLoadAsset(MonkeyMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets

  const Swing_1_Ref = useRef(null)

  useEffect(() => {
    if (Swing_1_Ref.current && !Loading) {
      try {
        const ch2 = lottie.loadAnimation({
          name: "swing",
          container: Swing_1_Ref.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: Assets?.monkey?.lottie[1],
        })
      } catch (err) {
        console.log(err)
      }
    }
  }, [Assets, Loading])

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <div ref={Swing_1_Ref} className="start_monkey">.</div>

      </>
    }
  />;
}
