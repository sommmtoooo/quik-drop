const { Router } = require('express')
const multer = require('multer')

const router = Router()

const { uploadFiles, downloadFile, getFiles } = require('../controllers/controllers')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.originalname)
    }
})

const upload = multer({ storage })

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/checker', (req,res) => {
    res.status(200).send('{message: "Shiit"}')
})

router.get('/receive', (req, res) => {
    res.render('receive')
})

router.get('/send', (req, res) => {
    res.render('send', {
        message: ""
    })
})

router.get('/files', getFiles)

router.get('/download/:filename', downloadFile)

router.get('/*', (req, res) => {
    res.render('notfound')
})

router.post('/upload', upload.array('files'), uploadFiles)




module.exports = router
