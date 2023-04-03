const fs = require('fs')


const uploadFiles = (req, res) => {
    res.status(200).send('File uploaded successfully')
}

const downloadFile = (req, res) => {

    const filename = req.params.filename;
    const file = `./files/${filename}`

    fs.exists(file, (exists) => {
        if (exists) {
            res.setHeader('Content-disposition', `attachment; filename=${filename}`);
            res.setHeader('Content-Type', 'application/octet-stream');
            const fileStream = fs.createReadStream(file);
            fileStream.pipe(res);
        } else {
            res.status(404).send('File not found');
        }
    });
}

const getFiles = (req, res) => {

    const directoryPath = './files';

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log('Error getting directory information:', err);
        } else {
            console.log('List of files in the directory:');
            res.json(files)
        }
    });
    
}

module.exports = {  uploadFiles, downloadFile, getFiles }