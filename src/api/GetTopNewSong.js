const GetTopNewSong = () => {
   return fetch('https://imusik.herokuapp.com/api/topnewsong/')// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default GetTopNewSong