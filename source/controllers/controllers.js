const fs = require("fs");
const path = require("path");

const uploadFiles = (req, res) => {
    res.render("send", {
        message: "File uploaded successfully",
    });
};

const downloadFile = (req, res) => {
    const filename = req.params.filename;
    const file = path.join(__dirname, `../files/${filename}`);

    fs.exists(file, (exists) => {
        if (exists) {
            res.setHeader(
                "Content-disposition",
                `attachment; filename=${filename}`
            );
            res.setHeader("Content-Type", "application/octet-stream");
            const fileStream = fs.createReadStream(file);
            fileStream.pipe(res);
        } else {
            res.status(404).send("File not found");
        }
    });
};

const getFiles = (req, res) => {
    const directoryPath = path.join(__dirname, "../files");

    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            console.log("Error getting directory information:", err);
        } else {
            res.json(files);
        }
    });
};

module.exports = { uploadFiles, downloadFile, getFiles };
