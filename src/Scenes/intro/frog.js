import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import FrogMap from './frogAssetmap';


export default function Frog() {
  const { Bg, Loading } = useLoadAsset(FrogMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { frog } = Assets

  const [count, setcount] = useState(1)
  const [swing, setswing] = useState(false)

  const Ref2 = useRef(null);

  const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;

  const gen_nums = () => {
    const one = randomInt(0, 9)
    let two = randomInt(0, 9)

    while (two === one) {
      two = randomInt(0, 9)
    }

    console.log(one, two)
  }


  gen_nums()
  // loading animation
  useEffect(() => {
    if (frog && Ref2.current && !Loading) {
      try {


        const ch2 = lottie.loadAnimation({
          name: "swing",
          container: Ref2.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: frog?.lottie[1],
        })

        // ch2.addEventListener('enterFrame', () => {
        //   if (Math.floor(ch2.currentFrame) === 33) {
        //     setswing(false)
        //     console.log("completed honey");
        //   }

        // })
      } catch (err) {
        console.log(err)
      }
    }
  }, [Assets, Loading])



  const get_pos = () => {
    switch (count) {
      case 0:
        return "frog_start"
        break;

      case 1:
        return "frog_start_jump"
        break;

      case 2:
        return "frog_second_jump"
        break;

      case 3:
        return "frog_third_jump"
        break

      case 4:
        return "frog_fourth_jump"
        break;

      case 5:
        return "frog_fifth_jump"
        break;

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


        {/* <div ref={Ref} className='frog_start_jump'></div> */}
        <div ref={Ref2} className={get_pos()}></div>
      </>
    }
  />;
}
