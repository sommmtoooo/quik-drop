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

router.post('/upload', upload.array('files'), uploadFiles)

router.get('/download/:filename', downloadFile)

router.get('/files', getFiles)


module.exports = router