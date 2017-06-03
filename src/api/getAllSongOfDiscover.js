const GetAllSongOfDiscover = (id) => {
   return fetch('https://imusik.herokuapp.com/api/getSongFromDiscover/' + id)// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default GetAllSongOfDiscover