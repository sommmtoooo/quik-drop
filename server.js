const express = require('express')
const path = require('path');
const { exec } = require('child_process')


const app_router = require('./routes/router');
const { stdin } = require('process');

const app = express()

const hostname = false ? '192.168.114' : '0.0.0';
const PORT = 8080

app.use(express.static(path.join(__dirname, 'public')))

app.set('view engine', 'ejs')

app.use('/', app_router)


app.listen(PORT, hostname, () => {
    exec('hostname -I', (err,stdout,stderr) => {
        if(err){
            console.log("An error occured")
        }

        console.log(`IP:${stdout}`);
        console.log(`PORT:${PORT}`);
        
    })
})