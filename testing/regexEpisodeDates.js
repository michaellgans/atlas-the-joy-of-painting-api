// Captures data from a CSV with Regex Patterns and stores
// that data into a Map Dictionary

const fs = require('fs');
const readFileUtil = require('./utils/readFileUtil.js');

function pullValues() {
    // String to search through
    let str = '"A Walk in the Woods" (January 11, 1983)';

    // Regex patterns
    // Find any number of characters that aren't " between two ".
    let paintingTitle = /"([^"]*)"/;
    // Finds the first "word" after the first (
    let date = /\((\w+)/ ;
    let titleResult = str.match(paintingTitle);
    let dateResult = str.match(date);

    if (titleResult && titleResult[1]) {
        console.log(titleResult[1]);
    } else {
        console.log("Couldn't match title.");
    }

    if (dateResult && dateResult[1]) {
        console.log(dateResult[1]); 
    } else {
        console.log("Couldn't match date.");
    }
}

function pullValues2() {
    // Trying lines with new line characters
    let str = `"A Walk in the Woods" (January 11, 1983)
               "Mount McKinley" (January 11, 1983)
               "Ebony Sunset" (January 18, 1983)`;
    
    let csvLines = str.split(/\n/);

    // Regex pattern (finds two matches)
    // Find any number of characters that aren't " between two ".
    // Finds the first "word" after the first (
    let regexPatterns = /"([^"]*)"\s+\((\w+)/;

    for (let line of csvLines) {
        let match = line.match(regexPatterns);
        // check for null
        if (match) {
            let paintingTitle = match[1];
            let date = match[2];
            console.log(`Title: ${paintingTitle}. Date: ${date}`);
        } else {
            console.log("No match found");
        }
    };
}

function pullValuesFromFile() {
    // Pulls lines from file instead of from hardcode
    // Will print "No match found" if there is a new line
    // at the end of the txt file!
    const filePath = './episode_dates.txt';

    let str;
    // Try to read contents of file
    try {
        str = fs.readFileSync(filePath, 'utf8');
        console.log("File has been read!");
    } catch (err) {
        console.error(err);
        return;
    }

    let csvLines = str.split(/\n/);

    // Regex pattern (finds two matches)
    // Find any number of characters that aren't " between two ".
    // Finds the first "word" after the first (
    let regexPatterns = /"([^"]*)"\s+\((\w+)/;
    let count = 0;

    for (let line of csvLines) {
        let match = line.match(regexPatterns);
        // check for null
        if (match) {
            let paintingTitle = match[1];
            let date = match[2];
            console.log(`Title: ${paintingTitle}. Date: ${date}`);
            count ++;
        } else {
            console.log("No match found");
        }
    };
    // To validate the number of matches found
    console.log(count);
}

function createDatesMap() {
    // Reads source .txt file and returns split lines.
    const txtLines = readFileUtil('./sources/episode_dates.txt');

    // Regex pattern (finds two matches)
    // Find any number of characters that aren't " between two ".
    // Finds the first "word" after the first (
    const regexPatterns = /"([^"]*)"\s+\((\w+)/;
    const dict = new Map();

    // Callback method to loop through each line of text
    txtLines.forEach((line, index) => {
        let match = line.match(regexPatterns);
        if (match) {
            let paintingTitle = match[1];
            let paintingMonth = match[2];
            // Adds auto-incrementing index to account for
            // Map overwriting non-unique keys
            dict.set(index + 1, { paintingTitle, paintingMonth });
        } else {
            console.log("No pattern found.");
        }
    });

    console.log(`Size of dictionary: ${dict.size}`);
    console.log(dict);
}

// Tests
// pullValues();
// console.log("-----")
// pullValues2();
// console.log("-----")
// pullValuesFromFile();
// console.log("-----")
// pullFromEpisodeDates();

// Export Functions
module.exports = { createDatesMap }

// Execute
if (require.main === module) {
    createDatesMap();
}
