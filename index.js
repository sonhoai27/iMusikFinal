const express = require('express')
const session = require('express-session')
const parser = require('body-parser').urlencoded({extended: false})
const app = express()


const {queryDB} = require('./controllers/db')


app.listen(process.env.PORT || 3000, ()=>console.log('Server Started'))
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(session({ 
    secret: 'keyboard imusiqwek', 
    cookie: { maxAge: 604800 },
    resave: true,
    saveUninitialized: true
}));

app.use('/getDiscover', require('./router/Discover.js'))
app.use('/Dashboard', require('./router/Dashboard.js'))
app.use('/login', require('./controllers/signup'))
app.get('/checkadmin', (req, res) => {
     if (req.session.dash == true) {
        res.redirect('/dashboard')
    }else{
         res.render('Dashboard/login')
    }
})

app.get('/dangxuat', (req, res) => {
    req.session.destroy();
    res.send("Thoat")
})

app.get('*', (req, res) => {
      res.render('index')
})

app.post('/checkadmin', parser , (req, res) => {
    const {email, pass} = req.body
    if(email === 'son' && pass === '123'){
        req.session.dash = true
        res.redirect('/dashboard')
    }else{
         res.redirect('/checkadmin')
    }
})
