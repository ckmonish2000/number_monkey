export const LoadJson = async (url) => {
  const data = await fetch(url).then(v => v.json())
  return data
}