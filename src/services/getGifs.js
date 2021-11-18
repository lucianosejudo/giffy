const apiKey = 'jePqdc7H3TlKlk8I9OXvdL7oWf1wb6fE'

export default async function getGifs(keyword = 'homero') {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
  const res = await fetch(apiURL)
  const { data } = await res.json()
  const gifs = data.map(image => {
    const { id, title, images } = image
    const { url } = images.downsized_medium
    return {
      id, title, url
    }
  })
  return gifs
}