const { Router } = require('express')
const multer = require('multer')

const router = Router()


const { uploadFile, downloadFile, getFiles } = require('../controllers/controllers')


const storage = multer.diskStorage({
    destination: (request, file, callback) => {
        callback(null, './uploads')
    },
    filename: (request, file, callback) => {
        callback(null, file.originalname)
    }
})

const upload = multer({ storage })

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/upload', upload.single('file'), uploadFile)

router.get('/download/:filename', downloadFile)

router.get('/files', getFiles)


module.exports = router