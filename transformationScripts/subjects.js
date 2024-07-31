// Captures data from a CSV with Regex Patterns and stores
// that data into a Map Dictionary

const fs = require('fs');
const readFileUtil = require('../utils/readFileUtil.js');
const capWordUtil = require('../utils/capWordUtil.js');
const writeFileUtil = require('../utils/writeFileUtil.js');

function regexSubjectMatter() {
    // Read source CSV file
    const txtLines = readFileUtil('../sources/subject_matter.csv');

    // Store title string
    const csvHeader = txtLines[0];
    const regexEpisode = /^[^,]*/; // Matches: "EPISODE"

    // Remove "Episode" from title string and add "id"
    let newCSVHeader = "ID" + csvHeader.replace(regexEpisode, "");
    let formattedHeader = newCSVHeader.toLowerCase();
    formattedHeader = capWordUtil(formattedHeader, ",");

    // Create clean dictionary with:
    // id, title, season, subjects
    const regexPatterns = /([^,]*),"{3}([^"]*)"{3},/;

    const dict = new Map();

    // Callback method to loop through each line of text
    txtLines.forEach((line, index) => {
        let match = line.match(regexPatterns);
        // Skips the Header of the CSV 
        if (index === 0) {
            return;
        }
        if (match) {
            let paintingSeason = match[1];

            // Transforming Painting Title
            let paintingTitle = match[2]; // ALL CAPS
            let newPaintingTitle = paintingTitle.toLowerCase(); // lowercase
            newPaintingTitle = capWordUtil(newPaintingTitle, " "); // Final Form

            // Capture true/false subject string from each line
            let paintingSubjects = line.replace(regexPatterns, "");

            // Adds auto-incrementing index to account for
            // Map overwriting non-unique keys
            dict.set(index, { newPaintingTitle, paintingSeason, paintingSubjects });
        } else {
            console.log("No pattern found.");
        }
    });

    // console.log(`Size of dictionary: ${dict.size}`);
    // console.log(dict);

    // Create new CSV with:
    // id, title, string
    headersArray = formattedHeader.split(',');

    // Transform Map into Array
    data = [...dict.entries()].map(([id, { newPaintingTitle, paintingSubjects }]) => [
        id,
        newPaintingTitle,
        paintingSubjects
    ]);

    writeFileUtil('../transformedCSVs/subject.csv', headersArray, data);
}

// Tests
regexSubjectMatter();
