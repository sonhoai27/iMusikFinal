const getOneDiscover = (id) => {
   return fetch('https://imusik.herokuapp.com/api/getOneDiscover/' + id)// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default getOneDiscover