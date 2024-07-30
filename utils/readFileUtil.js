// Util function to read a file and return the lines split by new line characters

const fs = require('fs');

function readFileUtil(filePath) {
    // Read source CSV file
    let str;

    try {
        str = fs.readFileSync(filePath, 'utf8');
        console.log("File has been read!");
    } catch (err) {
        console.error(err);
    }

    let txtLines = str.split(/\r?\n/); // changed from just newline

    return txtLines;
}

module.exports = readFileUtil;