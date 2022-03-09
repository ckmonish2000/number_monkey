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
import { Stars2 } from './Stars';


export default function Intro() {
  const { Bg, Loading } = useLoadAsset(IntroMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets

  const [count, setcount] = useState(1)
  const [starCount, setstarCount] = useState(1)
  const [countp1, setcountp1] = useState(0)
  const [Wrong, setWrong] = useState(0)
  const [Correct, setCorrect] = useState(0)
  const [playing, setplaying] = useState(true)

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

  useEffect(() => {
    setTimeout(() => {
      setWrong(0)
    }, 2500)
  }, [Wrong])


  useEffect(() => {
    setTimeout(() => {
      setCorrect(0)
    }, 2500)
  }, [Correct])

  let timer = null

  useEffect(() => {
    if (!playing) {
      timer = setTimeout(() => {
        const sound = Assets?.intro?.sounds[4]
        sound?.play()
        sound?.on("end", () => { setplaying(false) })
      }, 15000);
    }
  }, [playing])


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
          console.log("completed honey");
          // }

        })
      } catch (err) {
        console.log(err)
      }
    }

    if (!Loading) {
      const sound = Assets?.intro?.sounds[0]
      sound?.play()
      sound?.on("end", () => { setplaying(false) })
    }
  }, [Assets, Loading])

  useEffect(() => {
    if (starCount === 6) {
      stop_all_sounds()
      if (timer) clearTimeout(timer)
      setSceneId("/mend")
    }
  }, [starCount])


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
    const sound = Assets?.intro?.sounds[1]
    sound?.play()
    sound?.on("end", () => { setplaying(false) })
    setswing(true)
    setcountp1(count + 1)
    lottie.stop("swing")
    lottie.play("swing")
    setstarCount(starCount + 1)
    setTimeout(() => { gen_nums() }, 3000)
  }

  const NUM1 = () => {
    if (timer) clearTimeout(timer)
    if (num1 > num2) {
      stop_all_sounds()
      setCorrect(1)
      setWrong(0)
      setTimeout(() => { Next() }, 1000)
    } else {
      stop_all_sounds()
      setWrong(1)
      setCorrect(0)
      const sound = Assets?.intro?.sounds[2]
      sound?.play()
      sound?.on("end", () => { Assets?.intro?.sounds[3]?.play() })

    }
  }

  const NUM2 = () => {
    if (timer) clearTimeout(timer)
    if (num1 < num2) {
      stop_all_sounds()
      setCorrect(2)
      setWrong(0)
      setTimeout(() => { Next() }, 1000)
    } else {
      stop_all_sounds()
      setWrong(2)
      setCorrect(0)
      const sound = Assets?.intro?.sounds[2]
      sound?.play()
      sound?.on("end", () => { Assets?.intro?.sounds[3]?.play() })
    }
  }

  return <Scenes
    Bg={Bg}
    sprites={
      <>

        {/* border 1 */}
        {Wrong === 1 && <Image
          src={intro?.sprites[5]}
          className='_1st_pebel' />}

        {Correct === 1 && <Image
          src={intro?.sprites[6]}
          className='_1st_pebel' />}


        {/* border 2 */}
        {Wrong === 2 && <Image
          src={intro?.sprites[5]}
          className='_2nd_pebel' />}

        {Correct === 2 && <Image
          src={intro?.sprites[6]}
          className='_2nd_pebel' />}


        <Stars2
          count={starCount}
          board={Assets?.intro?.sprites[2]}
          grey={Assets?.intro?.sprites[3]}
          color={Assets?.intro?.sprites[4]}
          styles={["root_star_pos",
            { position: 'absolute', width: '100%', left: "0%" },
            "b_star_1",
            "b_star_2",
            "b_star_3",
            "b_star_4",
            "b_star_5",
          ]}
        />


        <span className='num_pos_1'
          onClick={NUM1}
        >{num1}</span>


        <span
          onClick={NUM2}
          className='num_pos_2'>{num2}</span>

        <Image
          onClick={NUM1}
          src={intro?.sprites[1]}
          style={{ zIndex: 8 }}
          className='_1st_pebel' />

        <Image
          onClick={NUM2}
          src={intro?.sprites[1]}
          style={{ zIndex: 8 }}
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
