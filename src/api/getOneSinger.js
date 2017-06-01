const getOneSinger = (id) => {
   return fetch('https://imusik.herokuapp.com/getDiscover/getOneSinger/' + id)// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default getOneSinger