// Util function to write a new CSV file

const fs = require('fs');

function writeFileUtil(filePath, data) {
    // Convert data to CSV format
    const csvLines = data.map(row => row.join(',')).join('\n');

    fs.writeFile(filePath, csvLines, 'utf-8', (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log("File successfully written!");
        }
    });
}

const filePath = './test.csv';
const data = [
    ['ID', 'Title', 'Season'],
    [1, 'Quiet Woods', 'Fall'],
    [2, 'Mountain Peaks', 'Winter'],
    [3, 'Sunny Meadow', 'Spring']
];

writeFileUtil(filePath, data);

// module.exports = writeFileUtil;