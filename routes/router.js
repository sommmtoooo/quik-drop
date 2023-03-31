const { Router } = require('express')

const router = Router()

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/send', (req, res) => {
    res.render('send')
})

router.get('/receive', (req, res) => {
    res.render('receive')
})


module.exports = router