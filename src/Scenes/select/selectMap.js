import { imgurl, soundurl, lottieurl } from "../../utils/path"

const SelectMap = {
  id: "select2",

  Bg: `${imgurl}sb_42_bg_01.svg`,

  sprites: [
    `${imgurl}select_circle.svg`,
    `${imgurl}frog_3.svg`,
    `${imgurl}monkey_3.svg`
  ],


  sounds: [
    `${soundurl}select_audio.mp3`
  ],

  lottie: [
    // `${lottieurl}scene_01.json`,
    `${lottieurl}monkey_hanging.json`,
    `${lottieurl}monkey_02.json`
  ]
}

export default SelectMap;