import React from 'react'
import { Howl } from "howler"

export default async function loadAudio(url) {
  const data = await fetch(url).then(v => v.arrayBuffer())
  return data
}



export async function AudioPlayer(url) {
  const sound = await loadAudio(url)
  const blob = new Blob([sound], {
    type: "music/mp3",
  })

  let how = URL.createObjectURL(blob)
  how = new Howl({
    src: [how],
    format: ["mp3"]
  })

  return how
}


export async function AudioPlayer2(url) {
  const sound = await loadAudio(url)
  const blob = new Blob([sound], {
    type: "music/mp3",
  })

  let how = URL.createObjectURL(blob)
  how = new Howl({
    src: [how],
    format: ["mp3"],
    volume: 0.5
  })

  return how
}