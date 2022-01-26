import { useContext, useRef, useEffect, useState } from 'react';
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
  const [shirt, setshirt] = useState(false);
  const [pant, setpant] = useState(false);
  const [cap, setcap] = useState(false);

  // playing Sound
  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {/* char */}
        <Image
          src={Assets[sceneName]?.sprites[0]}
          className="char_pos"
        />


        {/* dress */}

        <Image
          src={Assets[sceneName]?.sprites[1]}
          onClick={() => { setcap(true) }}
          id={cap ? "summer_cap" : ""}
          className="first"
        />

        <Image
          src={Assets[sceneName]?.sprites[2]}
          onClick={() => { setshirt(true) }}
          id={shirt ? "move_shirt" : ""}
          className={"second"}
        />


        <Image
          src={Assets[sceneName]?.sprites[3]}
          onClick={() => { setpant(true) }}
          id={pant ? "summer_pant" : ""}
          className="third"
        />

      </>
    }
  />;
}
