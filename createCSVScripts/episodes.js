// Creates "Episodes" CSV for PowerBI
// @ID - identifies unique paintings
// @TITLE - name of painting
// @SEASON - season painting aired
// @EPISODE - episode painting aired
// @MONTH - what month of the year the painting aired

const capWordUtil = require('../utils/capWordUtil.js');
const writeFileUtil = require('../utils/writeFileUtil.js');
const { regexColorsUsed } = require('../regexColorsUsed.js');
const { regexEpisodeDates } = require('../regexEpisodeDates.js');

// Generates Episodes Map
function createEpisodesMap() {
    // Define start of new header
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    const newCSVHeader = "id,painting_title,season,episode,month"
    const formattedHeader = capWordUtil(newCSVHeader, ","); // Final Format

    // Pull data from imported Maps
    const { dict: colorsDict } = regexColorsUsed();
    const { dict: datesDict } = regexEpisodeDates();

    // Create clean dictionary with data needed
    const dict = new Map();

    // Callback method to loop through each Map
    colorsDict.forEach((colorsValue, id) => {
        let datesValue = datesDict.get(parseInt(id));

        if (datesValue) {
            // Create new dictionary with combined data
            dict.set(id, {
                paintingTitle: colorsValue.paintingTitle,
                season: colorsValue.season_helper,
                episoide: colorsValue.episode_helper,
                month: datesValue.paintingMonth
            });
        }
    });

    console.log(`Size of dictionary: ${dict.size}`);
    // console.log(dict);
    return { dict, formattedHeader };
}

// Writes Episodes CSV
function writeEpisodesCSV() {
    const { dict, formattedHeader } = createEpisodesMap();

    // Create new CSV with: id, title, season, episode, month
    headersArray = formattedHeader.split(',');

    // Transform Map into Array
    // TODO: CHANGE THIS DEPENDING ON WHAT YOU'RE PRINTING!!!
    data = [...dict.entries()].map(([id, { paintingTitle, season, episoide, month }]) => [
        id,
        paintingTitle,
        season,
        episoide,
        month
    ]);

    writeFileUtil('./transformedCSVs/episodes.csv', headersArray, data);
}

// Export Functions
module.exports = { createEpisodesMap, writeEpisodesCSV }

// Execute
if (require.main === module) {
    writeEpisodesCSV();
}
