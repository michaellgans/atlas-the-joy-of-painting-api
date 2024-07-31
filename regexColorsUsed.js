// Captures data from a CSV with Regex Patterns and stores
// that data into a Map Dictionary

const fs = require('fs');
const readFileUtil = require('./utils/readFileUtil.js');
const capWordUtil = require('./utils/capWordUtil.js');
const writeFileUtil = require('./utils/writeFileUtil.js');

function regexColorsUsed() {
    // Read source CSV file
    // const txtLines = readFileUtil('./sources/subject_matter.csv');
    const txtLines = readFileUtil('./testing/testColorsUsed.csv');

    // Store title string
    const csvHeader = txtLines[0]; // Origional Header

    // Parse csvHeader to get colors string
    const regexHeader = /^([^B]*)/;
    const paintingColors = csvHeader.replace(regexHeader, "");

    // Define start of new header
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    let newCSVHeader = "id,painting_title,season_helper,episode_helper,total_colors,youtube_src,"
    newCSVHeader = newCSVHeader + paintingColors;
    let formattedHeader = capWordUtil(newCSVHeader, ",");
    console.log(formattedHeader);

    // Create clean dictionary with:
    // id, title, season, subjects
    const regexPatterns = /^([^,]*,){2}([^,]*),([^,]*),(\d),(\d),(\d)/;

    `([^,]*,)(.*(?=painting_title))(.*(?=colors))([^B]*)`

    // const dict = new Map();

    // // Callback method to loop through each line of text
    // txtLines.forEach((line, index) => {
    //     let match = line.match(regexPatterns);
    //     // Skips the Header of the CSV 
    //     if (index === 0) {
    //         return;
    //     }
    //     if (match) {
    //         let paintingSeason = match[1];

    //         // Transforming Painting Title
    //         let paintingTitle = match[2]; // ALL CAPS
    //         let newPaintingTitle = paintingTitle.toLowerCase(); // lowercase
    //         newPaintingTitle = capWordUtil(newPaintingTitle); // Final Form

    //         // Capture true/false subject string from each line
    //         let paintingSubjects = line.replace(regexPatterns, "");

    //         // Adds auto-incrementing index to account for
    //         // Map overwriting non-unique keys
    //         dict.set(index, { newPaintingTitle, paintingSeason, paintingSubjects });
    //     } else {
    //         console.log("No pattern found.");
    //     }
    // });

    // console.log(`Size of dictionary: ${dict.size}`);
    // // console.log(dict);

    // // Create new CSV with:
    // // id, title, string
    // headersArray = formattedHeader.split(',');

    // // Transform Map into Array
    // data = [...dict.entries()].map(([id, { newPaintingTitle, paintingSubjects }]) => [
    //     id,
    //     newPaintingTitle,
    //     paintingSubjects
    // ]);

    // writeFileUtil('./subject.csv', headersArray, data);
}

// Tests
regexColorsUsed();
