const fs = require("fs");
const { chdir } = require("process");
const dir = "./logs";
const path = require('path')

function deleteLogs() {
    if (!fs.existsSync(dir)) {
        console.log("Directory does not exist")
    } else {
        process.chdir(dir)
        for (i = 1; i <= 10; i++) {
            fs.unlink(`log${i}.txt`, function (err) {
                if (err) throw err;
            })
            console.log(`deleted files...log${i}.txt`);
        }
        process.chdir('../')
        fs.rmdirSync(dir)
    }
}
//deleteLogs();

function createLogs() {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        process.chdir(dir)
        for (i = 1; i <= 10; i++) {
            fs.writeFile(`log${i}.txt`, `This is log ${i}`,
                console.log(`log${i}.txt`), function (err) {
                    if (err) throw err;
                })
        }
    } else {
        console.log('Directory Exists')
    }

}
createLogs();

