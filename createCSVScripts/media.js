// Creates "Media" CSV for PowerBI
// @ID - identifies unique paintings
// @TITLE - name of painting
// @YOUTUBE_SRC - link to Bob Ross video of painting

const fs = require('fs');
const readFileUtil = require('../utils/readFileUtil.js');
const capWordUtil = require('../utils/capWordUtil.js');
const writeFileUtil = require('../utils/writeFileUtil.js');

function regexColorsUsed() {
    // Read source CSV file
    const txtLines = readFileUtil('./sources/colors_used.csv');

    // Store title string
    const csvHeader = txtLines[0]; // Origional Header

    // Parse csvHeader to get colors string
    const regexHeader = /^([^B]*)/;
    const paintingColors = csvHeader.replace(regexHeader, "");

    // Define start of new header
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    let newCSVHeader = "id,painting_title,youtube_src"
    let formattedHeader = capWordUtil(newCSVHeader, ",");

    // Create clean dictionary with data needed
    const regexPatterns = /^(\d*),\d*,([^,]*),([^,]*),(\d),(\d),(\d),([^,]*)(,"([^"]*")){2}/;

    // console.log(`id = ${match[1]}, paintingTitle = ${match[3]}, season_helper = ${match[4]}, episode_helper = ${match[5]}, total_colors = ${match[6]}, youtube_src = ${match[7]}`);
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
            let season_helper = match[4];
            let episode_helper = match[5];
            let total_colors = match[6];
            let youtube_src = match[7];

            // Capture true/false color string from each line
            let colorsData = line.replace(regexPatterns, "");

            // Adds data from CSV to Map Dictionary
            dict.set(id, { paintingTitle, season_helper, episode_helper, total_colors, youtube_src, colorsData });
        } else {
            console.log("No pattern found.");
        }
    });

    // console.log(`Size of dictionary: ${dict.size}`);
    // console.log(dict);

    // Create new CSV with:
    // id, title, youtube_src
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

// Tests
regexColorsUsed();
