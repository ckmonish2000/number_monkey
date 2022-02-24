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
  const waterRef = useRef(null);
  const BigFrogRef = useRef(null);

  const [num1, setnum1] = useState(null)
  const [num2, setnum2] = useState(null)

  const randomInt = (max, min) => Math.round(Math.random() * (max - min)) + min;

  const gen_nums = () => {
    const one = randomInt(0, 9)
    let two = randomInt(0, 9)

    while (two === one) {
      two = randomInt(0, 9)
    }


    setnum1(one)
    setnum2(two)
  }

  // loading animation
  useEffect(() => {
    if (num1 == null && num2 === null) {
      gen_nums()
    }

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

        const water = lottie.loadAnimation({
          name: "swing",
          container: waterRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: frog?.lottie[2],
        })

        const Bigfrog = lottie.loadAnimation({
          name: "swing",
          container: BigFrogRef.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: frog?.lottie[3],
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

    if (Assets && !Loading) {
      Assets?.frog?.sounds[0]?.play()
    }
  }, [Assets, Loading])


  useEffect(() => {
    if (count === 5) {
      stop_all_sounds()
      Assets?.frog?.sounds[2]?.play()
    }
  }, [count])


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


  const Next = () => {

    stop_all_sounds()

    setswing(true)
    lottie.stop("swing")
    lottie.play("swing")
    setcount(count + 1)
    gen_nums()
    if (count !== 4) {
      Assets?.frog?.sounds[1]?.play()
    }
  }

  const stop_all_sounds = () => {
    Assets?.frog?.sounds?.map(v => v.stop())
  }


  return <Scenes
    Bg={Bg}
    sprites={
      <>
        {count !== 5 && <>
          <span className='num_pos_1'
            onClick={() => {
              if (num1 > num2) {
                Next()
              }
            }}
          >{num1}</span>


          <span
            onClick={() => {
              if (num1 < num2) {
                Next()
              }
            }}
            className='num_pos_2'>{num2}</span>

          <Image
            src={frog?.sprites[0]}
            className='_1st_pebel' />

          <Image
            src={frog?.sprites[0]}
            className="_2nd_pebel" />

        </>}
        {/* Title */}


        {/* <div ref={Ref} className='frog_start_jump'></div> */}
        <div className='Big_frog' ref={BigFrogRef}></div>
        <div className='water_ripple_pos' ref={waterRef}></div>
        <div ref={Ref2} className={get_pos()}></div>
      </>
    }
  />;
}
