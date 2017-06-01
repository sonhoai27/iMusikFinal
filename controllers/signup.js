let express = require('express')
let router = express.Router()
const parser = require('body-parser').urlencoded({ extended: false })
// let cookieParser = require('cookie-parser');
const { DangNhap, queryDB } = require('./db.js')
const { sign, verify } = require('./jwt');

// router.use(cookieParser());


router.post('/', parser, (req, res) => {
    const { password, username } = req.body
    DangNhap(username, password)
        .then(() => {
            req.session.DaDN = true
            res.send("THANHCONG")
        })
        .catch(err => res.send(err + ''))
});

router.get('/check', (req, res) => {
    if (req.session.DaDN === undefined) {
        req.session.DaDN = false
        return res.send('CHUA')
    } else {
        if (req.session.DaDN) {
            return res.send('ROI')
        } else {
           return res.send('CHUA')
        }
    }
})
module.exports = router
