import { imgUrl, soundUrl, lottieUrl } from "../../utils/path"

const FrogMap = {
  id: "frog",

  Bg: `${imgUrl}SB_42_BG_01.svg`,

  sprites: [
    // `${imgUrl}Intro-Text.svg`,
    // `${imgUrl}play.svg`,
    // `${imgUrl}FG_monkey.svg`
  ],


  sounds: [
    // `${soundUrl}Intro.mp3`
  ],

  lottie: [
    // `${lottieUrl}Scene_01.json`,
    `${lottieUrl}frog/SB42_Frog_Idle.json`,
    `${lottieUrl}frog/SB42_Frog_Jump_01.json`,
  ]
}

export default FrogMap;