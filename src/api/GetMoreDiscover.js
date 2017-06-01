const GetDiscover = (trang) => {
   return fetch('https://imusik.herokuapp.com/getDiscover/morediscover/'+ trang)// eslint-disable-line
    .then(res => res.json())
    .catch(err => console.log(err + ""))
}

export default GetDiscover