const getOneSinger = (id) => {
   return fetch('https://imusik.herokuapp.com/api/getOneSinger/' + id)// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default getOneSinger