export const LoadImage = async (url) => {
  const data = await fetch(url).then(v => v.text())
  console.log(url, data)
  return data
}