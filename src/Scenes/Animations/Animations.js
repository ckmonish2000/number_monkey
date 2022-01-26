import { useContext, useRef, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import SummerMap from './scene2map';
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/animation.css"

export default function Animation({ sceneName }) {
  const { Bg, Loading } = useLoadAsset(SummerMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);

  const Ref_1 = useRef(null);
  const Ref_2 = useRef(null);


  // loading boy and girl
  useEffect(() => {
    if (Assets[sceneName] && Ref_1.current && !Loading && Ref_2.current) {
      try {
        lottie.loadAnimation({
          name: "boy",
          container: Ref_1.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets[sceneName]?.lottie[0],
        })


        lottie.loadAnimation({
          name: "girl",
          container: Ref_2.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets[sceneName]?.lottie[1],
        })
      } catch (err) {
        console.log(err)
      }
    }
  }, [Assets, Loading])

  // playing Sound


  useEffect(() => {
    if (Assets[sceneName] && !Loading && !isLoading) {
      PlayAudio(Assets[sceneName]?.sounds[0], () => {
        PlayAudio(Assets[sceneName]?.sounds[1])
      })
    }
  }, [Assets, Loading, isLoading])
  return <Scenes
    Bg={Bg}
    sprites={
      <>

        <div className="lottie_boy" ref={Ref_1} id="boy"></div>
        <div className="lottie_girl" ref={Ref_2} id="girl"></div>
      </>
    }
  />;
}
