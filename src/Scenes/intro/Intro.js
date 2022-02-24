import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import IntroMap from './AssetMap';
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import "../../styles/monkey.css"


export default function Intro() {
  const { Bg, Loading } = useLoadAsset(IntroMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets

  const [count, setcount] = useState(1)
  const [countp1, setcountp1] = useState(0)

  const [swing, setswing] = useState(false)
  const Ref = useRef(null);
  const Ref2 = useRef(null);
  const countRef = useRef(null);
  countRef.current = count


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

  const stop_all_sounds = () => {
    Assets?.intro?.sounds?.map(v => v.stop())
  }

  // loading animation
  useEffect(() => {

    if (num1 == null && num2 === null) {
      gen_nums()
    }

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
          // if (Math.floor(ch2.currentFrame) === 33) {
          setswing(false)
          setcount(countRef.current + 1)
          setcountp1(0)
          if (countRef.current === 5) {
            const audio = Assets?.intro?.sounds[1]
            audio?.play()
            // setTimeout(() => { setSceneId("/frog") }, 2000)
          }
          console.log("completed honey");
          // }

        })
      } catch (err) {
        console.log(err)
      }
    }

    if (!Loading) {
      Assets?.intro?.sounds[0]?.play()
    }
  }, [Assets, Loading])


  const get_swing_class = () => {
    switch (countRef.current) {
      case 1:
        return "branch1_swing"
        break;
      case 2:
        return "branch2_swing"
        break

      case 3:
        return "branch3_swing"
        break

      case 4:
        return "branch4_swing"
        break

      // case 5:
      //   return "branch4_swing"
      //   break


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


  const Next = () => {
    stop_all_sounds()
    setswing(true)
    setcountp1(count + 1)
    lottie.stop("swing")
    lottie.play("swing")
    // setcount(count + 1)
    gen_nums()
  }


  return <Scenes
    Bg={Bg}
    sprites={
      <>


        <span className='num_pos_1'
          onClick={() => {
            if (num1 > num2 && !swing) {
              Next()
            }
          }}
        >{num1}</span>


        <span
          onClick={() => {
            if (num1 < num2 && !swing) {
              Next()
            }
          }}
          className='num_pos_2'>{num2}</span>

        <Image
          src={intro?.sprites[1]}
          className='_1st_pebel' />

        <Image
          src={intro?.sprites[1]}
          className="_2nd_pebel" />
        {/* Title */}

        <Image
          style={{ display: count === 1 ? "none" : "" }}
          className="swing_1"
          src={intro?.sprites[0]}
        />

        <Image
          style={{ display: count === 2 || countp1 === 2 ? "none" : "" }}
          className="swing_2"
          src={intro?.sprites[0]}
        />

        <Image
          style={{ display: count === 3 || countp1 === 3 ? "none" : "" }}
          className="swing_3"
          src={intro?.sprites[0]}
        />

        <Image
          style={{ display: count === 4 || countp1 === 4 ? "none" : "" }}
          className="swing_4"
          src={intro?.sprites[0]}
        />

        <Image
          style={{ display: count === 5 || countp1 === 5 ? "none" : "" }}
          className="swing_5"
          src={intro?.sprites[0]}
        />



        <div ref={Ref} className={get_idle_class()} style={{ opacity: !swing ? 1 : 0 }}></div>
        <div ref={Ref2} className={get_swing_class()} style={{ opacity: !swing ? 0 : 1 }}></div>
      </>
    }
  />;
}
