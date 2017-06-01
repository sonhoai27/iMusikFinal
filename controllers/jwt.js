const jwt = require('jsonwebtoken');

const SECRET_KEY = 'df2h8de8wjsabdadf';

const sign = (obj) => (
    new Promise((resolve, reject) => {
        jwt.sign(obj, SECRET_KEY, {expiresIn: "7d"}, (err, token) => {
            if(err) return reject(err + '')
            resolve(token)
        })  
    })
)

const verify = (token)=>(
    new Promise((resolve, reject) => {
        jwt.verify(token, SECRET_KEY, {expiresIn:"7d"}, (err, decoded)=>{
            if(err) return reject(err + '')
            resolve(decoded)
        })  
    })
)

module.exports = { sign, verify };