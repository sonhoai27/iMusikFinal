const getSongOfSinger = (id) => {
   return fetch('https://imusik.herokuapp.com/getDiscover/getSongOfSinger/' + id)// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default getSongOfSinger