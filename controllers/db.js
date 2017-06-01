const pg = require('pg')
const bcrypt = require('bcrypt')

const config = {
	user: 'bptkrhlspsakec',
	database: 'dd5oea2k62cja1',
	password: '43c9c4aa60ad062ed22cec6c3ffeeee211f80a2a6e0759858b2ee324a09b7c18',
	host: 'ec2-54-204-1-40.compute-1.amazonaws.com',
	port: 5432,
	max: 1000,
	idleTimeoutMillis: 20000000,
	ssl: true
}
const pool = new pg.Pool(config);

const queryDB = (sql, arrayData)=>{
	return new Promise((resolve, reject) => {
		pool.connect((err, client, done)=>{
			if(err) return reject(err + "")
			client.query(sql, arrayData, (err_, result_)=>{
				done(err)
				if(err_ ) return reject(err_ + "")
				resolve(result_)
			})
		})
	});
}
// const ThemUser = (Email, Password, Name, Image) =>{
// 	bcrypt.hash(Password, 10, (err, encrypt) =>{
// 		var sql = `INSERT INTO public."Users" ("EmailU", "PasswordU", "NameU", "ImageU", "AdminU")
// 		VALUES($1, $2, $3, $4, 'false')`
// 		queryDB(sql, [Email, encrypt, Name, Image])
// 		.then(result => console.log("Thanh Cong"))
// 		.catch(err => console.log(err +''))
// 	})
// }

const DangNhap = (Email, Pass) =>{
	const sql = `SELECT "EmailU", "PasswordU"
    FROM public."Users" 
    WHERE "EmailU"=$1`
    return new Promise((resolve, reject) => {
    	 queryDB(sql, [Email])
    	 .catch(err => reject(err +""))
    	 .then(result =>{
    	 	if(result.rowcount === 0){
     	 		return reject('Sai')   	 		
     	 }
    		const {PasswordU} = result.rows[0]
    		bcrypt.compare(Pass, PasswordU, (errHash, same)=>{
    			if(errHash) return reject(errHash)
    			if(!same) return reject('Sai Mat Khau')
    			resolve(same)
    		}) 

    	 })
    })
}

const LayDiscover = (offSet)=>(
	queryDB(`SELECT *  FROM "Discover", "Singer" where "Discover"."idSingerD" = "Singer"."IdS" order by "IdD" DESC limit 6 offset $1`, [offSet])
	.then(result => result.rows)
)


const layTen = (Email)=>(
	queryDB(`select * from public."Users" where "EmailS" = '${Email}'`, [])
	.then(result => result.rows[0])
)

const ThemDiscover = (NameD, LikeD, DescD, idSingerD, ImageD) => {
	const sql = `INSERT INTO public."Discover"(
            "NameD", "LikeD", "DescD", "idSingerD", "ImageD")
    VALUES ($1, $2, $3, $4, $5);`
	return queryDB(sql, [NameD, LikeD, DescD, idSingerD, ImageD])
	.then(result => console.log("Them Thanh Cong"))
}

const IdDiscoverCuoi = () => {
	const sql = `SELECT "IdD"
  FROM public."Discover" order by "IdD" DESC limit 1;`
  	return queryDB(sql, [])
	.then(result => result.rows[0])
}

const UpdateIdDiscoverOfSong = (NoiDung, Id) => {
	const sql = `UPDATE public."Song"
   				SET "idDiscover"= $1
 				WHERE "Id" = $2;`
	return queryDB(sql, [NoiDung, Id])
}

const UpdateDiscover = (Id, Name, Desc) => {
	const sql = `UPDATE public."Discover"
   				SET "NameD"=$2,"DescD"=$3
 				WHERE "IdD" = $1;`
	return queryDB(sql, [Id, Name, Desc])
}

const DeleteDiscover = (Id) => {
	const sql = `DELETE FROM public."Discover" WHERE "IdD" = $1;`
	return queryDB(sql, [Id])
}

//tim bai hat
const LayRaBaiHat = (Name) => {
	const sql = `select * from "Song" where "Name" like '%${Name}%'`
	return queryDB(sql, [])
	.then(result => result.rows)
	.catch((err) => console.log(err))
}

const DeleteSong = (Id) => {
	const sql = `DELETE FROM public."Song" WHERE "Id" = $1;`
	return queryDB(sql, [Id])
}
const GetOneSong = (Id) => {
	const sql = `select * from public."Song" WHERE "Id" = $1;`
	return queryDB(sql, [Id])
	.then(result => result.rows)
	.catch(err => console.log(err + ""))
}
const GetAllSong = () => (
	queryDB(`select * from "Song"`)
	.then(result => result.rows)
	.catch(err => console.log(err + ""))
)
 const UpdateInfoSong = (Id, Name, Desc) => {
	 const sql = `UPDATE public."Song"
   				SET "Name"=$2,"Desc"=$3
 				WHERE "Id" = $1;`
	return queryDB(sql, [Id, Name, Desc])
 }

const AddNewSong = (Name, Desc, Image, Link, idCaSi, Like) => {
	const sql = `INSERT INTO public."Song"("Name", "Desc", "Image", "Link", "idCaSi", "Like")
    VALUES ($1, $2, $3, $4, $5, $6)`
	return queryDB(sql, [Name, Desc, Image, Link, idCaSi, Like])
	.then(() => console.log("THANH CONG"))
	.catch(err => console.log(err + ''))
}

const LayCaSi = () => (
	queryDB(`select * from "Singer"`)
	.then(result => result.rows)
	.catch(err => console.log(err + ''))
)
const layMotDiscover = (id) => {
	const sql = `select * from "Discover", "Singer" where "Discover"."IdD" = $1 and "Discover"."idSingerD" = "Singer"."IdS" order by "IdD"`
	return queryDB(sql, [id])
	.then(result => result.rows)
	.catch(err => console.log("Khong Co"))
}

const getSongFromDiscover = (idDiscover) => {
	const sql = `select * from "Song", "Singer" where "idDiscover" = $1 and "Song"."idCaSi" = "Singer"."IdS"`
	return queryDB(sql, [idDiscover])
	.then(result => result.rows)
	.catch(err => console.log(err))
}

//lay ra bang xep hang
const getHotDiscover = () => {
	const sql = `select * from "Discover" where "LikeD" >= 10 order by "IdD" DESC limit 10`
	return queryDB(sql, [])
	.then(result => result.rows)
}
const getHotSong= () => {
	const sql = `select * from "Song" where "Like" >= 10 order by "Id" DESC limit 10`
	return queryDB(sql, [])
	.then(result => result.rows)
}

const getHotSinger = () => {
	const sql = `select * from "Singer" where "LikeS" >= 10 limit 4`
	return queryDB(sql, [])
	.then(result => result.rows)
	.catch(err => console.log(err))
}

const getOneSinger = (id) => {
	const sql = `select * from "Singer" where "IdS" = $1`
	return queryDB(sql, [id])
	.then(result => result.rows)
	.catch(err => console.log(err))
}

const getSongOfSinger = (id) => {
	const sql = `select * from "Song" where "idCaSi" = $1 And "Like" >= 10`
	return queryDB(sql, [id])
	.then(result => result.rows)
	.catch(err => console.log(err))
}

const LayDiscoverOfSinger = (offSet)=>(
	queryDB(`SELECT *  FROM "Discover" where "LikeD" >= 10 and "idSingerD" = $1`, [offSet])
	.then(result => result.rows)
)
const updateLikeSong = (id) =>{
	const sql = `UPDATE public."Song"
   SET "Like"= "Like" + 1 where "Id" = $1 RETURNING "Like"`
   return queryDB(sql, [id])
   .then(result => result.rows[0].Like)
}

const SearchDiscover = (content) => {
	const sql = `select * from "Discover", "Singer" where "Discover"."idSingerD" = "Singer"."IdS" and "Discover"."NameD" like '%${Content}%'`
	return queryDB(slq, [])
	.then(result => result.rows)
	.catch((err) => console.log(err + ""))
}


module.exports = {
	DangNhap,
	queryDB,
	layTen,
	LayDiscover,
	ThemDiscover,
	IdDiscoverCuoi,
	UpdateIdDiscoverOfSong,
	LayRaBaiHat,
	LayCaSi,
	layMotDiscover,
	DeleteDiscover,
	UpdateDiscover,
	getSongFromDiscover,
	updateLikeSong,
	getHotDiscover,
	getHotSong,
	getHotSinger,
	getOneSinger,
	getSongOfSinger,
	LayDiscoverOfSinger,
	SearchDiscover,
	DeleteSong,
	UpdateInfoSong,
	GetAllSong,
	GetOneSong,
	AddNewSong
}
//xu ly phan dang ky dang nhap, admin page, like discover, chuyen doi get sang post. su dung ajax
//admin page su dung thuan html/css/jquery.