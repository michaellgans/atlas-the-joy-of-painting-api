// Creates "Subjects" CSV for PowerBI
// @ID - identifies unique paintings
// @TITLE - name of painting
// @SUBJECT - name of subject present in painting, true/false

const fs = require('fs');
const readFileUtil = require('../utils/readFileUtil.js');
const capWordUtil = require('../utils/capWordUtil.js');
const writeFileUtil = require('../utils/writeFileUtil.js');

// Generates Subjects Map
function createSubjectsMap() {
    // Read source CSV file
    const txtLines = readFileUtil('./sources/subject_matter.csv');

    // Store CSV Header
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    const csvHeader = txtLines[0];
    const regexEpisode = /^[^,]*/; // Matches: "EPISODE"

    // Remove "Episode" from title string and add "id"
    const newCSVHeader = "ID" + csvHeader.replace(regexEpisode, "");
    let formattedHeader = newCSVHeader.toLowerCase(); // lowercase
    formattedHeader = capWordUtil(formattedHeader, ","); // Final Format

    // Create clean dictionary with: id, title, subjects
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
            // Transforming Painting Title
            let paintingTitle = match[2]; // ALL CAPS
            let newPaintingTitle = paintingTitle.toLowerCase(); // lowercase
            newPaintingTitle = capWordUtil(newPaintingTitle, " "); // Final Format

            // Capture true/false subject string from each line
            let paintingSubjects = line.replace(regexPatterns, "");

            // Adds auto-incrementing index to account for
            // Map overwriting non-unique keys
            dict.set(index, { newPaintingTitle, paintingSubjects });
        } else {
            console.log("No pattern found.");
        }
    });

    console.log(`Size of dictionary: ${dict.size}`);
    return { dict, formattedHeader };
}

// Writes Subject CSV
function writeSubjectsCSV() {
    const { dict, formattedHeader } = createSubjectsMap();

    // Create new CSV with: id, title, subjects
    headersArray = formattedHeader.split(',');

    // Transform Map into Array
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    data = [...dict.entries()].map(([id, { newPaintingTitle, paintingSubjects }]) => [
        id,
        newPaintingTitle,
        paintingSubjects
    ]);

    writeFileUtil('./transformedCSVs/subject.csv', headersArray, data);
}

// Export Functions
module.exports = { createSubjectsMap, writeSubjectsCSV }

// Execute
if (require.main === module) {
    writeSubjectsCSV();
}
