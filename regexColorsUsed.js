// Captures data from a CSV with Regex Patterns and stores
// that data into a Map Dictionary

const readFileUtil = require('./utils/readFileUtil.js');

function regexColorsUsed() {
    // Read source CSV file
    const txtLines = readFileUtil('./sources/colors_used.csv');

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
    // console.log(dict);
    return { dict };
}

// Export Functions
module.exports = { regexColorsUsed }

// Execute
if (require.main === module) {
    regexColorsUsed();
}
