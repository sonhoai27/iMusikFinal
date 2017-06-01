const getHotDiscover = () => {
   return fetch('https://imusik.herokuapp.com/getDiscover/getHotDiscover/')// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default getHotDiscover