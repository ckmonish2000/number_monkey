import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/monkey.css"
import MonkeyEndMap from './MonkeyEndMap';


export default function MonkeyEnd() {
  const { Bg, Loading } = useLoadAsset(MonkeyEndMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets


  const Ref = useRef(null);
  const Ref2 = useRef(null);

  useEffect(() => {
    const bg = document.querySelector(".Bg_Image")

    bg.style.transform = "scale(1.8) translate(-10%, 0px)"

    const ch = lottie.loadAnimation({
      name: "hang",
      container: Ref.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: intro?.lottie[0],
    })

  }, [])

  useEffect(() => {
    if (Assets && !Loading) {
      Assets?.intro?.sounds[1]?.play()
    }
  }, [Assets, Loading])

  return <Scenes
    Bg={Bg}
    sprites={
      <>


        <Image
          className="swing_1"
          src={intro?.sprites[0]}
        />

        <Image
          className="swing_2"
          src={intro?.sprites[0]}
        />

        <Image
          className="swing_3"
          src={intro?.sprites[0]}
        />

        <Image
          className="swing_4"
          src={intro?.sprites[0]}
        />

        {/* <Image
          className="swing_5"
          src={intro?.sprites[0]}
        /> */}

        {/* <Image
          className="swing_3"
          style={{
            width: "8%",
            left: "76%",
            top: "-2%"

          }}
          src={intro?.sprites[1]}
        />

        <Image
          className="swing_3"
          style={{
            width: "17%",
            left: "72%",
            top: "24%"
          }}
          src={intro?.sprites[2]}
        /> */}

        <div ref={Ref} className="branch4_swing" ></div>
        <Image
          onClick={() => {
            const bg = document.querySelector(".Bg_Image")
            Assets?.intro?.sounds?.map(v => v.stop())
            bg.style.transform = ""
            setSceneId("/home")
          }}
          src={Assets?.intro?.sprites[3]} className="replayBtn" />
      </>
    }
  />;
}
