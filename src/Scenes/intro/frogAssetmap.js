import { imgUrl, soundUrl, lottieUrl } from "../../utils/path"

const FrogMap = {
  id: "frog",

  Bg: `${imgUrl}SB_42_BG_01.svg`,

  sprites: [
    // `${imgUrl}Intro-Text.svg`,
    // `${imgUrl}play.svg`,
    // `${imgUrl}FG_monkey.svg`
    `${imgUrl}pink_box.svg`
  ],


  sounds: [
    // `${soundUrl}Intro.mp3`
    `${soundUrl}frog_1.mp3`,
    `${soundUrl}tap.mp3`,
    `${soundUrl}frog_2.mp3`
  ],

  lottie: [
    // `${lottieUrl}Scene_01.json`,
    `${lottieUrl}frog/SB42_Frog_Idle.json`,
    `${lottieUrl}frog/SB42_Frog_Jump_01.json`,
    `${lottieUrl}frog/water_ripple.json`,
    `${lottieUrl}frog/SB42_Big_Frog_idle.json`
  ]
}

export default FrogMap;