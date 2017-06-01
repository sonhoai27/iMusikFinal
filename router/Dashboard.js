let express = require('express')
const parser = require('body-parser').urlencoded({ extended: false });
const {uploadSingle} = require('../controllers/UploadAnh') 
const {UploadDiscoverClass} = require('../controllers/UploadDiscoverClass')
let router = express.Router()


const {
	queryDB,
	layTen,
	LayDiscover,
	LayRaBaiHat, //tim bai hat co ten la gi
	UpdateIdDiscoverOfSong,
	IdDiscoverCuoi,
	LayCaSi,
	ThemDiscover,
	DeleteDiscover,
	UpdateDiscover,
	layMotDiscover,
	GetAllSong,
	DeleteSong,
	UpdateInfoSong,
	GetOneSong,
	AddNewSong
} = require('../controllers/db')

router.get('/', (req, res) => {
    if(req.session.dash == true){
		LayDiscover(0)
	.then(info => {
		// res.send(info)
		LayCaSi().then(allSinger => {
			// console.log(allSinger)
			res.render('Dashboard/main', {info, allSinger})
		})
	})
	}else{
		res.redirect('/checkadmin')
	}
})
router.get('/morediscover/:trang', (req, res) =>{
	var {trang} = req.params
	console.log("trang: ", trang)
	trang = (trang - 1) * 6;
	LayDiscover(trang)
	.then((info) => {
		console.log(info)
		res.render('Dashboard/LoadMoreDis', {info})
	});

})
router.post('/timbaihat', parser, (req, res) => {
	const {ten} = req.body
	console.log("ten: " + ten)
	if(ten !== '' && ten != ' '){
		LayRaBaiHat(ten)
		.then(info => {
			console.log(info)
			IdDiscoverCuoi()
			.then(IdCuoi => {
				console.log(IdCuoi)
				res.render('Dashboard/TimBaiHat', {info, IdCuoi})
			})
		})
		.catch(err => console.log(err + ''))
	}
})
router.get('/addSongToDiscover/:Id', (req, res) => {
	const {Id} = req.params
	IdDiscoverCuoi()
	.then((IdCuoi) => {
		const LastId = IdCuoi.IdD + 1
		UpdateIdDiscoverOfSong(LastId, Id)
		.then(() => res.send('THANHCONG'))
	} )
	.catch(err => console.log(err +''))
})

router.post('/addNewDiscover', parser, (req, res) => {
	uploadSingle('avatarDiscover')(req, res, (err) => {
		const {Title, Like, Desc, Singer} = req.body
		const {path} = req.file
		const duongDanHinh = path.substr(7)
		ThemDiscover(Title, Like, Desc, Singer, duongDanHinh)
		.then(() => {
			res.redirect('/dashboard')
		})
	})
})


router.get('/updatediscover/:id', (req, res) => {
	const {id} = req.params
	layMotDiscover(id)
	.then(result => {
		res.render('../views/Dashboard/Discover/UpdateDiscover.ejs', {result})
	})
	.catch(err => console.log(err + ""))
})

router.post('/updatediscover/:id', parser, (req, res) => {
	const {id} = req.params
	const {Desc, Name} = req.body
	UpdateDiscover(id, Name, Desc)
	.then(() => {
		console.log("THANH_CONG")
		console.log(Desc)
		res.redirect('/dashboard')
	})
	.catch(err => console.log(err +''))
})

router.post('/deletediscover/:id', parser, (req, res) => {
	const {id} = req.params
	DeleteDiscover(id)
	.then(kq =>{
		console.log('Thanh Cong')
		res.redirect('/Dashboard')
	})
	.catch(err => res.send('THAT_BAI'))
})


//bai hat
router.get('/song', (req, res) => {
	GetAllSong()
	.then(info => {
		// res.send(info)
		LayCaSi().then(allSinger => {
			// console.log(allSinger)
			res.render('../views/Dashboard/Song/song', {info, allSinger})
		})
	})
})

router.get('/updatesong/:id', (req, res) => {
	const {id} = req.params
	GetOneSong(id)
	.then(result => {
		res.render('../views/Dashboard/Song/updatesong.ejs', {result})
	})
	.catch(err => console.log(err + ""))
})

router.post('/updatesong/:id', parser, (req, res) => {
	const {id} = req.params
	const {Desc, Name} = req.body
	UpdateInfoSong(id, Name, Desc)
	.then(() => {
		console.log("THANH_CONG")
		console.log(Desc)
		res.redirect('/dashboard')
	})
	.catch(err => console.log(err +''))
})

router.get('/deletesong/:id', (req, res) => {
	const {id} = req.params
	DeleteSong(id)
	.then(kq =>{
		console.log('Thanh Cong')
		res.redirect('/Dashboard')
	})
	.catch(err => res.send('THAT_BAI'))
})

router.post('/addnewsong', parser, (req, res) => {
	const {Title, Desc, LinkMp3, LinkImage, Singer} = req.body
	const LikeSong = 0
	AddNewSong(Title, Desc, LinkImage, LinkMp3, Singer, LikeSong)
	.then(() => {
		console.log('THANH CONG')
		res.redirect('/dashboard')
	})
	.catch(err => console.log(err +''))
})
router.post('/updateIdDiscoverOfSong/', parser, (req, res) => {
	const {IdD, IdS} = req.body
	UpdateIdDiscoverOfSong(IdD, IdS)
	.then(() => res.send('THANHCONG'))
	.catch((err) => console.log(err + ""))
})

router.post('/timnhac', parser, (req, res) => {
	const {ten, idDiscover} = req.body
	if(ten !== '' && ten != ' '){
		LayRaBaiHat(ten)
		.then(info => {
			res.render('Dashboard/Song/timnhac2', {info, idDiscover})
		})
		.catch(err => console.log(err + ''))
	}
	
})
// router.post('/upload', parser, (req, res) => {//2222
//     uploadSingle('avatarDiscover')(req, res, (err) => {
//         if(err){
// 			res.send('loi')
// 		}
//        res.send('ok')
//     });
// });
module.exports = router
