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

    // TODO: 
    // Isolate title, youtube, season, episode, total_colors, true/false
    // Change season and episode to season_helper ect
    // Change num_colors to total_colors?
    // const regexEpisode = /^[^,]*/; // Matches: "EPISODE"

    // // Remove "Episode" from title string and add "id"
    // let newCSVHeader = "ID" + csvHeader.replace(regexEpisode, "");
    // newCSVHeader.toLowerCase();

    // // Create clean dictionary with:
    // // id, title, season, subjects
    // const regexPatterns = /([^,]*),"{3}([^"]*)"{3},/;

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
