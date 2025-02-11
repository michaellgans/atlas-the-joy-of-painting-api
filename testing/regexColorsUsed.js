// Captures data from a CSV with Regex Patterns and stores
// that data into a Map Dictionary

const readFileUtil = require('./utils/readFileUtil.js');
const capWordUtil = require('./utils/capWordUtil.js');

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
    let newCSVHeader = "id,painting_title,season_helper,episode_helper,total_colors,youtube_src,"
    newCSVHeader = newCSVHeader + paintingColors;
    let formattedHeader = capWordUtil(newCSVHeader, ",");

    // Create clean dictionary with data needed
    const regexPatterns = /^(\d{1,3}),\d*,([^,]*),([^,]*),(\d{1,3}),(\d{1,3}),(\d{1,3}),([^,]*)(,"([^"]*")){2}/;
    // const match = txtLines[1].match(regexPatterns);

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

    console.log(`Size of dictionary: ${dict.size}`);
    console.log(dict);

    // // Create new CSV with:
    // // id, title, string
    // headersArray = formattedHeader.split(',');

    // Transform Map into Array
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    // data = [...dict.entries()].map(([id, { newPaintingTitle, paintingSubjects }]) => [
    //     id,
    //     newPaintingTitle,
    //     paintingSubjects
    // ]);

    // writeFileUtil('./subject.csv', headersArray, data);
}

// Tests
regexColorsUsed();
