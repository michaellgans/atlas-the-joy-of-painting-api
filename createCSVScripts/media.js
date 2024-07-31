// Creates "Media" CSV for PowerBI
// @ID - identifies unique paintings
// @TITLE - name of painting
// @YOUTUBE_SRC - link to Bob Ross video of painting

const readFileUtil = require('../utils/readFileUtil.js');
const capWordUtil = require('../utils/capWordUtil.js');
const writeFileUtil = require('../utils/writeFileUtil.js');

// Generates Media Map
function createMediaMap() {
    // Read source CSV file
    const txtLines = readFileUtil('./sources/colors_used.csv');

    // Define start of new header
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    let newCSVHeader = "id,painting_title,youtube_src"
    let formattedHeader = capWordUtil(newCSVHeader, ","); // Final Format

    // Create clean dictionary with data needed
    const regexPatterns = /^(\d{1,3}),\d*,([^,]*),([^,]*),(\d{1,3}),(\d{1,3}),(\d{1,3}),([^,]*)(,"([^"]*")){2}/;

    const dict = new Map();

    // Callback method to loop through each line of text
    txtLines.forEach((line, index) => {
        let match = line.match(regexPatterns);
        // Skips the Header of the CSV 
        if (index === 0) {
            return;
        }
        if (match) {
            let id = match[1];
            let paintingTitle = match[3];
            let youtube_src = match[7];

            // Adds data from CSV to Map Dictionary
            dict.set(id, { paintingTitle, youtube_src });
        } else {
            console.log("No pattern found.");
        }
    });

    console.log(`Size of dictionary: ${dict.size}`);
    return { dict, formattedHeader };
}

// Writes Media CSV
function writeMediaCSV() {
    const { dict, formattedHeader } = createMediaMap();

    // Create new CSV with: id, title, youtube_src
    headersArray = formattedHeader.split(',');

    // Transform Map into Array
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    data = [...dict.entries()].map(([id, { paintingTitle, youtube_src }]) => [
        id,
        paintingTitle,
        youtube_src
    ]);

    writeFileUtil('./transformedCSVs/media.csv', headersArray, data);
}

// Export Functions
module.exports = { createMediaMap, writeMediaCSV }

// Execute
if (require.main === module) {
    writeMediaCSV();
}
