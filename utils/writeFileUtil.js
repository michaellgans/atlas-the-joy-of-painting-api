// Util function to write a new CSV file

const fs = require('fs');

function writeFileUtil(filePath, headers, data) {
    // Convert data to CSV format
    const csvLines = [headers, ...data].map(row => row.join(',')).join('\n');

    fs.writeFile(filePath, csvLines, 'utf-8', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File successfully written!");
        }
    });
}

// const filePath = './test.csv';
// const data = [
//     [1, 'Quiet Woods', 'Fall'],
//     [2, 'Mountain Peaks', 'Winter'],
//     [3, 'Sunny Meadow', 'Spring']
// ];
// const headers = ['ID', 'Title', 'Season'];

// writeFileUtil(filePath, headers, data);

module.exports = writeFileUtil;