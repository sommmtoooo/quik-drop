const express = require('express')
const path = require('path');


const app_router = require('./routes/router')

const app = express()

const hostname = false ? '192.168.114' : '0.0.0';
const PORT = 8080

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.use('/', app_router)


app.listen(PORT, hostname, () => {
    console.log(`Server running at http://${hostname}:${PORT}/`);
})