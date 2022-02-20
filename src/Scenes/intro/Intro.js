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

        ch2.addEventListener('enterFrame', () => {
          if (Math.floor(ch2.currentFrame) === 33) {
            setswing(false)
            console.log("completed honey");
          }

        })
      } catch (err) {
        console.log(err)
      }
    }
  }, [Assets, Loading])


  const get_swing_class = () => {
    switch (count) {
      case 1:
        return "branch1_swing"
        break;
      case 2:
        return "branch1_swing"
        break

      case 3:
        return "branch2_swing"
        break

      case 4:
        return "branch3_swing"
        break

      case 5:
        return "branch4_swing"
        break


      default:
        break;
    }
  }



  const get_idle_class = () => {
    switch (count) {
      case 1:
        return "branch1_idle"
        break;
      case 2:
        return "branch2_idle"
        break

      case 3:
        return "branch3_idle"
        break

      case 4:
        return "branch4_idle"
        break

      case 5:
        return "branch5_idle"
        break


      default:
        break;
    }
  }


  return <Scenes
    Bg={Bg}
    sprites={
      <>
        <button
          className='pause'
          onClick={() => {
            setswing(true)
            lottie.stop("swing")
            lottie.play("swing")
            setcount(count + 1)
          }}
        >pause</button>
        {/* Title */}

        <Image
          style={{ display: count === 1 ? "none" : "" }}
          className="swing_1"
          src={intro?.sprites[0]}
        />

        <Image
          style={{ display: count === 2 ? "none" : "" }}
          className="swing_2"
          src={intro?.sprites[0]}
        />

        <Image
          style={{ display: count === 3 ? "none" : "" }}
          className="swing_3"
          src={intro?.sprites[0]}
        />

        <Image
          // style={{ display: count === 4 ? "none" : "" }}
          className="swing_4"
          src={intro?.sprites[0]}
        />

        <Image
          style={{ display: count === 5 ? "none" : "" }}
          className="swing_5"
          src={intro?.sprites[0]}
        />



        <div ref={Ref} className={get_idle_class()} style={{ opacity: !swing ? 1 : 0 }}></div>
        <div ref={Ref2} className={get_swing_class()} style={{ opacity: !swing ? 0 : 1 }}></div>
      </>
    }
  />;
}
