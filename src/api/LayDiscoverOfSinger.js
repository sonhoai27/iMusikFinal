const LayDiscoverOfSinger = (id) => {
   return fetch('https://imusik.herokuapp.com/api/LayDiscoverOfSinger/' + id)// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default LayDiscoverOfSinger