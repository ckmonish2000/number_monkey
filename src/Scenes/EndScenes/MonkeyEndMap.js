import { imgUrl, soundUrl, lottieUrl } from "../../utils/path"

const MonkeyEndMap = {
  id: "intro2",

  Bg: `${imgUrl}SB_42_BG_02.svg`,

  sprites: [
    // `${imgUrl}Intro-Text.svg`,
    // `${imgUrl}play.svg`,
    `${imgUrl}FG_monkey.svg`,
    `${imgUrl}monkey_3.svg`,
    `${imgUrl}banana.svg`,
    `${imgUrl}replay.svg`
  ],


  sounds: [
    // `${soundUrl}Intro.mp3`
    `${soundUrl}monkey_1.mp3`,
    `${soundUrl}monkey_2.mp3`,
    `${soundUrl}replayAudio.mp3`,
    `${soundUrl}claps.mp3`,
  ],

  lottie: [
    // `${lottieUrl}Scene_01.json`,
    `${lottieUrl}monkey_banana.json`,
    `${lottieUrl}Monkey_02.json`
  ]
}

export default MonkeyEndMap;