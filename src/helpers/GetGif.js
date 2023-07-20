
const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/trending?api_key=hD4W90ZiD3No59Uk0eRJ9m0PkT3WWMGt&q=${category}&limit=20`;
    const resp = await fetch(url)
    const { data = [] } = await resp.json()

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,

    }))
    return gifs;
}

export {
    getGifs
}
