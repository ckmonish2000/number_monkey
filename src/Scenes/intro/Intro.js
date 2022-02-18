import { useContext, useRef, useEffect, useState } from 'react';
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

  const [count, setcount] = useState(1)
  const [swing, setswing] = useState(false)
  const Ref = useRef(null);
  const Ref2 = useRef(null);


  // loading animation
  useEffect(() => {
    if (intro && Ref.current && !Loading) {
      try {
        const ch = lottie.loadAnimation({
          name: "hang",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: intro?.lottie[0],
        })

        const ch2 = lottie.loadAnimation({
          name: "swing",
          container: Ref2.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          animationData: intro?.lottie[1],
        })

        ch2.addEventListener('complete', () => {
          setswing(false)
          console.log("completed honey");
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
        <button
          className='pause'
          onClick={() => {
            setswing(true)
            const ch = lottie.stop("swing")
            const ch2 = lottie.play("swing")
          }}
        >pause</button>
        {/* Title */}

        {/* <Image
          src={intro?.sprites[0]}
          alt="txt"
          id="fadeup"
          className="dressing_txt_img" />


        <Image
          src={intro?.sprites[1]}
          alt="txt"
          id="fadeup"
          className="play_btn"
          onClick={() => {
            const navi = () => {
              setTimeout(() => { setSceneId("/Summer") }, 1000)
            }

            PlayAudio(intro?.sounds[0], navi)
          }}
        />

      */}
        <div ref={Ref} className="intro_lottie_container" style={{ opacity: !swing ? 1 : 0 }}></div>
        <div ref={Ref2} className="intro_lottie_container_2" style={{ opacity: !swing ? 0 : 1 }}></div>
      </>
    }
  />;
}
