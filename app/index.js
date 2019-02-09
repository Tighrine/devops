const express = require('express')
const app = express()
const pool = require('./queries')
const bodyParser = require('body-parser')
const router = express.Router()

app.set('view engine', 'pug')
app.use(bodyParser.json({type: "*/*"}))
app.use(router)

pool.getConnection((err, con) => {
    if(err)
        throw err
    else
        console.log(`connection: ${con}`)
})

router.get('/', (req, res) => {
    pool.query("SELECT first_name, last_name,email FROM user;", (err, result, fields) => {
        res.render('index', { title: 'Hey', message: 'Hello there!', users: result })
    })
})

router.post('/', (req, res) => {
    
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const password = req.body.password
    const email = req.body.email

    console.log(req.body)

    pool.query(`INSERT INTO user (first_name, last_name, password, email) 
                VALUES('${first_name}', '${last_name}', '${password}', '${email}')`, 
        (err, result, fields) => {
            if(err)
                throw err
            res.redirect('/')  
        })
})

app.listen(3000, () => {
    console.log("Listening on localhost:3000")
})
