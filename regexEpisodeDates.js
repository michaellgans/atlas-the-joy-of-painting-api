// Captures data from a CSV with Regex Patterns and stores
// that data into a Map Dictionary

const readFileUtil = require('./utils/readFileUtil.js');

function regexEpisodeDates() {
    // Reads source .txt file and returns split lines.
    const txtLines = readFileUtil('./sources/episode_dates.txt');

    // Regex pattern (finds two matches)
    // Find any number of characters that aren't " between two ".
    // Finds the first "word" after the first (
    const regexPatterns = /"([^"]*)"\s+\((\w+)/;
    const dict = new Map();

    // Callback method to loop through each line of text
    txtLines.forEach((line, index) => {
        let match = line.match(regexPatterns);
        if (match) {
            let paintingTitle = match[1];
            let paintingMonth = match[2];
            // Adds auto-incrementing index to account for
            // Map overwriting non-unique keys
            dict.set(index + 1, { paintingTitle, paintingMonth });
        } else {
            console.log("No pattern found.");
        }
    });

    console.log(`Size of dictionary: ${dict.size}`);
    // console.log(dict);
    return { dict };
}

// Export Functions
module.exports = { regexEpisodeDates }

// Execute
if (require.main === module) {
    regexEpisodeDates();
}
