const express = require('express')
const app = express()
const pool = require('./queries')
const bodyParser = require('body-parser')
const router = express.Router()
const cors = require('cors')
const corsOption = {
    origin: "*"
}

app.use(cors())
app.set('view engine', 'pug')
app.use(bodyParser.urlencoded())
app.use(router)
app.set('views', __dirname + '/views')

pool.getConnection((err, con) => {
    if(err)
        throw err
    else
        console.log(`connection: ${con}`)
})

router.get('/', cors(corsOption) ,(req, res) => {
    pool.query("SELECT first_name, last_name,email FROM user;", (err, result, fields) => {
        res.render('index', { title: 'Hey', message: 'Hello there!', users: result })
    })
})

router.post('/', (req, res) => {
    
    console.log(req.body)

    const first_name = req.body.surname
    const last_name = req.body.name
    const password = req.body.password
    const email = req.body.email

    pool.query(`INSERT INTO user (first_name, last_name, password, email) 
                VALUES('${first_name}', '${last_name}', '${password}', '${email}')`, 
        (err, result, fields) => {
            if(err)
                throw err
            res.redirect('/')  
        })
})

app.listen(80, () => {
    console.log("Listening on localhost:80")
})
