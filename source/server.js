const express = require("express");
const path = require("path");
const { exec } = require("child_process");
const figlet = require("figlet");
const chalk = require("chalk");

const app_router = require("./routes/router");
const { stdin } = require("process");
const { data } = require("autoprefixer");

const app = express();

const hostname = false ? "192.168.114" : "0.0.0";
const PORT = 8080;

app.use(express.static(path.join(__dirname, "../public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../source/views"));

app.use("/", app_router);

app.listen(PORT, hostname, () => {
    let format;
    exec("hostname -I", (err, stdout, stderr) => {
        if (err) {
            console.log("An error occured");
            return;
        }

        figlet("Quik Drop", function (err, data) {
            if (err) {
                console.log("Ops: Something Went Error");
                if (process.env.MODE) {

                    console.log(err);
                    return;
                }
            }
            console.log(data);
            if (stdout) {
                format = `(LINK): ${chalk.white.bgBlue(
                    `http://${stdout.trim()}:${PORT}`
                )}`;
            } else {
                format = `(LINK): ${chalk.white.bgBlue(
                    `http://localhost:${PORT}`
                )}`;
            }

            console.log(format);
        });
    });
});
