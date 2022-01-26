import { useContext, useRef, useEffect } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import SummerTraceMap from './SummerTraceMap';
import "../../styles/trace.css"

export default function Trace({ sceneName }) {
  const { Bg, Loading } = useLoadAsset(SummerTraceMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);

  // playing Sound

  console.log(Assets[sceneName])
  // useEffect(() => {
  //   if (Assets[sceneName] && !Loading && !isLoading) {
  //     PlayAudio(Assets[sceneName]?.sounds[0], () => {
  //       PlayAudio(Assets[sceneName]?.sounds[1])
  //     })
  //   }
  // }, [Assets, Loading, isLoading])
  return <Scenes
    Bg={Bg}
    sprites={
      <>
        <Image
          src={Assets[sceneName]?.sprites[0]}
          className="char_pos"
        />


        <Image
          src={Assets[sceneName]?.sprites[1]}
          className="summer_cap"
        />

        <Image
          src={Assets[sceneName]?.sprites[2]}
          className="summer_shirt"
        />


        <Image
          src={Assets[sceneName]?.sprites[3]}
          className="summer_pant"
        />




      </>
    }
  />;
}
