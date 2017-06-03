let express = require('express')
let router = express.Router()
const {queryDB,
	layTen, LayDiscover,
	layMotDiscover, getSongFromDiscover,
	getHotDiscover, getHotSong,
	getHotSinger, getOneSinger,
	getSongOfSinger, LayDiscoverOfSinger,
	updateLikeSong, GetTopNewSong} = require('../controllers/db')

router.get('/', (req, res) => {
    LayDiscover(0)
    .then(result => res.send(result))
})
router.get('/morediscover/:trang', (req, res) =>{
	var {trang} = req.params
	console.log("trang: ", trang)
	trang = (trang - 1) * 6;
	LayDiscover(trang)
	.then((info) => {
		res.send(info)
	});
})
router.get('/getOneDiscover/:id', (req, res) =>{
	var {id} = req.params
	layMotDiscover(id)
	.then((info) => {
		res.send(info)
	});
})

router.get('/getSongFromDiscover/:id', (req, res) => {
	const {id} = req.params
	getSongFromDiscover(id)
	.then(info => {
		res.send(info)
	})
	.catch(err => console.log(err))
})

router.get('/getHotDiscover/', (req, res) => {
	getHotDiscover()
	.then(info => res.send(info))
	.catch( err => console.log(err))
})
router.get('/getHotSong/', (req, res) => {
	getHotSong()
	.then(info => res.send(info))
	.catch( err => console.log(err))
})
router.get('/getHotSinger/', (req, res) => {
	getHotSinger()
	.then(info => res.send(info))
	.catch( err => console.log(err))
})
router.get('/getOneSinger/:id', (req, res) => {
	const {id} = req.params
	getOneSinger(id)
	.then(info => res.send(info))
	.catch( err => console.log(err))
})

router.get('/getSongOfSinger/:id', (req, res) => {
	const {id} = req.params
	getSongOfSinger(id)
	.then(info => res.send(info))
	.catch( err => console.log(err))
})

router.get('/LayDiscoverOfSinger/:id', (req, res) => {
	const {id} = req.params
	LayDiscoverOfSinger(id)
	.then(info => res.send(info))
	.catch( err => console.log(err))
})

router.get('/updateLikeSong/:id', (req, res) => {
	const {id} = req.params
	updateLikeSong(id)
	.then(info => {
		res.send(info.toString())})
	.catch( err => console.log(err))
})
router.get('/topnewsong', (req, res) => {
	GetTopNewSong()
	.then(kq => res.send(kq))
	.catch(err => console.log(err + ''))
})
module.exports = router
