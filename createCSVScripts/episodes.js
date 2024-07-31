// Creates "Episodes" CSV for PowerBI
// @ID - identifies unique paintings
// @TITLE - name of painting
// @SEASON - season painting aired
// @EPISODE - episode painting aired
// @MONTH - what month of the year the painting aired

const capWordUtil = require('../utils/capWordUtil.js');
// const SubjectsMap = require('../createCSVScripts/subjects.js');

// Generates Episodes Map
function createEpisodesMap() {
    // Define start of new header
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    const newCSVHeader = "id,painting_title,season,episode,month"
    const formattedHeader = capWordUtil(newCSVHeader, ","); // Final Format

    // Pull data from imported Maps

    const 
    
    // Create clean dictionary with data needed
    // const dict = new Map();

//     // Callback method to loop through each line of text
//     txtLines.forEach((line, index) => {
//         let match = line.match(regexPatterns);
//         // Skips the Header of the CSV 
//         if (index === 0) {
//             return;
//         }
//         if (match) {
//             let id = match[1];
//             let paintingTitle = match[3];
//             let total_colors = match[6];

//             // Capture true/false color string from each line
//             let colorsData = line.replace(regexPatterns, "");

//             // Adds data from CSV to Map Dictionary
//             dict.set(id, { paintingTitle, colorsData, total_colors });
//         } else {
//             console.log("No pattern found.");
//         }
//     });

//     console.log(`Size of dictionary: ${dict.size}`);
//     return { dict, formattedHeader };
}

// // Writes Subject CSV
// function writeColorsByPaintingCSV() {
//     const { dict, formattedHeader } = createColorsByPaintingMap();

//     // Create new CSV with: id, title, color_data, total_colors
//     headersArray = formattedHeader.split(',');

//     // Transform Map into Array
//     // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
//     data = [...dict.entries()].map(([id, { paintingTitle, colorsData, total_colors }]) => [
//         id,
//         paintingTitle,
//         colorsData,
//         total_colors
//     ]);

//     writeFileUtil('./transformedCSVs/colors_by_painting.csv', headersArray, data);
// }

// // Export Functions
// module.exports = { createColorsByPaintingMap, writeColorsByPaintingCSV }

// // Execute
// if (require.main === module) {
//     writeColorsByPaintingCSV();
// }
