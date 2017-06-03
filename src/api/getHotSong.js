const getHotSong = () => {
   return fetch('https://imusik.herokuapp.com/api/getHotSong/')// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default getHotSong