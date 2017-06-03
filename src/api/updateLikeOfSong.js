const updateLikeSong = (id) => {
   return fetch('https://imusik.herokuapp.com/api/updateLikeSong/' + id)// eslint-disable-line
    .then(res => res.text())
    .catch(err => console.log(err + ""))
}

export default updateLikeSong