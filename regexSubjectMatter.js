// Exploring Regex patterns to match new CSV strings

const fs = require('fs');
const readFileUtil = require('./utils/readFileUtil.js');

function regexTest() {
    // Read source CSV file
    const txtLines = readFileUtil('./testing/testSubjectMatter.csv');

    // Store title string
    const csvHeader = txtLines[0];
    const regexEpisode = /^[^,]*/; // Matches: "EPISODE"

    // Remove "Episode" from title string and add "id"
    let newCSVHeader = "ID" + csvHeader.replace(regexEpisode, "");
    newCSVHeader.toLowerCase();

    // console.log(newCSVHeader);

    // Create clean dictionary with:
    // id, title, season, seasonHelper, episodeHelper, string
    const regexPatterns = /([^,]*),"{3}([^"]*)"{3},/;

    // const dict = new Map();

    // Callback method to loop through each line of text
    txtLines.forEach((line) => { // add index back
        let match = line.match(regexPatterns);
        // HOW TO SKIP FIRST LINE BECAUSE HEADER
        if (match) {
            let paintingSeason = match[1]; // Needs to create helpers
            let paintingTitle = match[2]; // Needs to be lower case
            console.log(`Title: ${paintingTitle}. Season: ${paintingSeason}`);

            // Adds auto-incrementing index to account for
            // Map overwriting non-unique keys
            // dict.set(index + 1, { paintingTitle, paintingMonth });
        } else {
            console.log("No pattern found.");
        }
    });

    // console.log(`Size of dictionary: ${dict.size}`);
    // console.log(dict);

    // Create new CSV with:
    // id, title, string
}

// Tests

regexTest();