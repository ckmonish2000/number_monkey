import { imgurl, soundurl, lottieurl } from "../../utils/path"

const MonkeyEndMap = {
  id: "intro2",

  Bg: `${imgurl}sb_42_bg_02.svg`,

  sprites: [
    // `${imgurl}intro_text.svg`,
    // `${imgurl}play.svg`,
    `${imgurl}fg_monkey.svg`,
    `${imgurl}monkey_3.svg`,
    `${imgurl}banana.svg`,
    `${imgurl}replay.svg`
  ],


  sounds: [
    // `${soundurl}intro.mp3`
    `${soundurl}monkey_1.mp3`,
    `${soundurl}monkey_2.mp3`,
    `${soundurl}replayaudio.mp3`,
    `${soundurl}claps.mp3`,
  ],

  lottie: [
    // `${lottieurl}scene_01.json`,
    `${lottieurl}monkey_banana.json`,
    `${lottieurl}monkey_02.json`,
    `${lottieurl}trans.json`
  ]
}

export default MonkeyEndMap;