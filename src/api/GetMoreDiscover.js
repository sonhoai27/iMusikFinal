const GetDiscover = (trang) => {
   return fetch('https://imusik.herokuapp.com/api/morediscover/'+ trang)// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default GetDiscover