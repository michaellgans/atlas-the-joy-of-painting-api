// Util function to write a new CSV file

const fs = require('fs');

function writeFileUtil(filePath, headers, data) {
    // Convert data to CSV format
    const csvLines = [headers, ...data].map(row => row.join(',')).join('\n');

    // Write CSV
    fs.writeFile(filePath, csvLines, 'utf-8', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File successfully written!");
            const totalRows = data.length;
            // Data Validation: number of rows should equal size of dict
            console.log(`Size of new CSV: ${totalRows}`);
        }
    });
}

module.exports = writeFileUtil;