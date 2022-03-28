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
import { BGContext } from '../../contexts/Background';


export default function MonkeyEnd({ stop }) {
  // const { Bg, Loading } = useLoadAsset(MonkeyEndMap)
  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro2 } = Assets
  const { Bg, setBg } = useContext(BGContext)
  const [IsLoading, setIsLoading] = useState(true);

  const Ref = useRef(null);
  const Ref2 = useRef(null);

  useEffect(() => {
    setBg(intro2?.Bg)

    const ch = lottie.loadAnimation({
      name: "hang",
      container: Ref2.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: intro2?.lottie[2],
    })

    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  useEffect(() => {
    if (Assets && !IsLoading) {
      Assets?.intro2?.sounds[3]?.play()
      const sound = Assets?.intro2?.sounds[1]
      sound?.play()
      sound?.on("end", () => {
        Assets?.intro2?.sounds[2]?.play()
      })


      const ch = lottie.loadAnimation({
        name: "hang",
        container: Ref.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: intro2?.lottie[0],
      })
    }
  }, [Assets, IsLoading])

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {IsLoading && <div
          ref={Ref2} className="trans"></div>}

        <Image
          className="swing_1"
          src={intro2?.sprites[0]}
        />

        <Image
          className="swing_2"
          src={intro2?.sprites[0]}
        />

        <Image
          className="swing_3"
          src={intro2?.sprites[0]}
        />

        <Image
          className="swing_4"
          src={intro2?.sprites[0]}
        />


        <div ref={Ref} className="standing_monkey" ></div>

        <Image
          onClick={() => {
            const bg = document.querySelector(".Bg_Image")
            Assets?.intro2?.sounds?.map(v => v.stop())
            bg.style.transform = ""
            stop()
            setSceneId("/home")
          }}
          src={Assets?.intro2?.sprites[3]} className="replayBtn" />
      </>
    }
  />;
}
