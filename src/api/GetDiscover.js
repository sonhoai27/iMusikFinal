const GetDiscover = () => {
   return fetch('https://imusik.herokuapp.com/getDiscover')// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default GetDiscover