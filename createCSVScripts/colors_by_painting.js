// Creates "colors_by_painting" CSV for PowerBI
// @ID - identifies unique paintings
// @TITLE - name of painting
// @COLOR - name of subject present in painting, true/false
// @TOTAL_COLORS - total number of colors used in the painting

const fs = require('fs');
const readFileUtil = require('../utils/readFileUtil.js');
const capWordUtil = require('../utils/capWordUtil.js');
const writeFileUtil = require('../utils/writeFileUtil.js');

function createColorsByPaintingCSV() {
    // Read source CSV file
    const txtLines = readFileUtil('./sources/colors_used.csv');

    // Store title string
    const csvHeader = txtLines[0]; // Origional Header

    // Parse csvHeader to get colors string
    const regexHeader = /^([^B]*)/;
    const paintingColors = csvHeader.replace(regexHeader, "");

    // Define start of new header
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    let newCSVHeader = "id,painting_title,"
    newCSVHeader = newCSVHeader + paintingColors + ",total_colors";
    let formattedHeader = capWordUtil(newCSVHeader, ","); // Final Format

    // Create clean dictionary with data needed
    const regexPatterns = /^(\d{1,3}),\d*,([^,]*),([^,]*),(\d{1,3}),(\d{1,3}),(\d{1,3}),([^,]*)(,"([^"]*")){2},/;

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
            let total_colors = match[6];

            // Capture true/false color string from each line
            let colorsData = line.replace(regexPatterns, "");

            // Adds data from CSV to Map Dictionary
            dict.set(id, { paintingTitle, colorsData, total_colors });
        } else {
            console.log("No pattern found.");
        }
    });

    console.log(`Size of dictionary: ${dict.size}`);

    // Create new CSV with: id, title, color_data, total_colors
    headersArray = formattedHeader.split(',');

    // Transform Map into Array
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    data = [...dict.entries()].map(([id, { paintingTitle, colorsData, total_colors }]) => [
        id,
        paintingTitle,
        colorsData,
        total_colors
    ]);

    writeFileUtil('./transformedCSVs/colors_by_painting.csv', headersArray, data);
}

// Execute
createColorsByPaintingCSV();
