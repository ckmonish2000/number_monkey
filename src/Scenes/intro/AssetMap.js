import { imgUrl, soundUrl, lottieUrl } from "../../utils/path"

const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}SB_42_BG_02.svg`,

  sprites: [
    // `${imgUrl}Intro-Text.svg`,
    // `${imgUrl}play.svg`,
    `${imgUrl}FG_monkey.svg`
  ],


  sounds: [
    // `${soundUrl}Intro.mp3`
  ],

  lottie: [
    // `${lottieUrl}Scene_01.json`,
    `${lottieUrl}Monkey_Hanging.json`,
    `${lottieUrl}Monkey_Swing.json`
  ]
}

export default IntroMap;