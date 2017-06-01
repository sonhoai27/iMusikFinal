const getHotSinger = () => {
   return fetch('https://imusik.herokuapp.com/getDiscover/getHotSinger/')// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default getHotSinger