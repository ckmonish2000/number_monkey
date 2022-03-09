import { useContext, useRef, useEffect, useState } from 'react';
import { SceneContext } from '../../contexts/SceneContext';
import Scenes from "../../utils/Scenes"
import useLoadAsset from '../../utils/useLoadAsset';
import PlayAudio from "../../utils/playAudio"
import lottie from "lottie-web"
import "../../styles/intro.css"
import Image from '../../utils/elements/Image';
import FrogMap from './frogAssetmap';
import Stars from './Stars';


export default function Frog() {
  const { Bg, Loading } = useLoadAsset(FrogMap)
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } = useContext(SceneContext);
  const { frog } = Assets

  const [count, setcount] = useState(0)
  const [swing, setswing] = useState(false)

  const Ref2 = useRef(null);
  const waterRef = useRef(null);
  const BigFrogRef = useRef(null);

  const [num1, setnum1] = useState(null)
  const [num2, setnum2] = useState(null)
  const [Wrong, setWrong] = useState(0)
  const [Correct, setCorrect] = useState(0)
  const [playing, setplaying] = useState(true)

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
          autoplay: false,
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


      } catch (err) {
        console.log(err)
      }
    }

    if (Assets && !Loading) {
      let sound = Assets?.frog?.sounds[0]
      sound?.play()
      sound?.on("end", () => setplaying(false))
    }
  }, [Assets, Loading])


  let timer = null

  useEffect(() => {
    if (!playing) {
      timer = setTimeout(() => {
        setplaying(true)
        const sound = Assets?.frog?.sounds[1]
        sound?.play()
        sound?.on("end", () => { setplaying(false) })
      }, 15000);
    }
  }, [playing])


  useEffect(() => {
    if (count === 5) {
      stop_all_sounds()
      setTimeout(() => {
        setSceneId("/fend")
      }, 1500)
    }
  }, [count])


  useEffect(() => {
    setTimeout(() => {
      setWrong(0)
    }, 2000)
  }, [Wrong])


  useEffect(() => {
    setTimeout(() => {
      setCorrect(0)
    }, 1000)
  }, [Correct])



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

  const stop_all_sounds = () => {
    Assets?.frog?.sounds?.map(v => v.stop())
  }


  const Next = () => {
    stop_all_sounds()
    const sound = Assets?.frog?.sounds[3]
    sound?.play()
    setplaying(true)
    setswing(true)
    lottie.stop("swing")
    lottie.play("swing")
    setcount(count + 1)
    setTimeout(() => {
      gen_nums()
    }, 2000)
    if (count !== 4) {
      sound.on('end', () => {
        stop_all_sounds()
        const sound = Assets?.frog?.sounds[1]
        sound?.play()
        sound?.on("end", () => { setplaying(false) })


      })
    }
  }


  const NUM1 = () => {
    if (timer) clearTimeout(timer)
    stop_all_sounds()
    if (num1 > num2) {
      setCorrect(1)
      setTimeout(() => { Next() }, 1000)
    } else {
      setWrong(1)
      const sound = Assets?.frog?.sounds[4]
      sound?.play()
      sound?.on("end", () => { Assets?.frog?.sounds[5]?.play() })
    }
  }

  const NUM2 = () => {
    if (timer) clearTimeout(timer)
    stop_all_sounds()
    if (num1 < num2) {
      setCorrect(2)
      setTimeout(() => { Next() }, 1000)

    } else {
      setWrong(2)
      const sound = Assets?.frog?.sounds[4]
      sound?.play()
      sound?.on("end", () => { Assets?.frog?.sounds[5]?.play() })
    }
  }
  return <Scenes
    Bg={Bg}
    sprites={
      <>
        <Stars

          count={count}
          board={Assets?.frog?.sprites[1]}
          grey={Assets?.frog?.sprites[2]}
          color={Assets?.frog?.sprites[3]}
          styles={[

            "root_star_pos",
            { position: 'absolute', width: '100%', left: "0%" },
            "flower_star_1",
            "flower_star_2",
            "flower_star_3",
            "flower_star_4",
            "flower_star_5",
          ]} />

        {count !== 5 && <>
          <span className='num_pos_1'
            onClick={NUM1}
          >{num1}</span>


          <span
            onClick={NUM2}
            className='num_pos_2'>{num2}</span>

          {/* border 1 */}
          {Wrong === 1 && <Image
            src={frog?.sprites[4]}
            className='_1st_pebel' />}

          {Correct === 1 && <Image
            src={frog?.sprites[5]}
            className='_1st_pebel' />}


          {/* border 2 */}
          {Wrong === 2 && <Image
            src={frog?.sprites[4]}
            className='_2nd_pebel' />}

          {Correct === 2 && <Image
            src={frog?.sprites[5]}
            className='_2nd_pebel' />}



          <Image
            onClick={NUM1}
            style={{ zIndex: 8 }}
            src={frog?.sprites[0]}
            className='_1st_pebel' />

          <Image
            style={{ zIndex: 8 }}
            onClick={NUM2}
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
