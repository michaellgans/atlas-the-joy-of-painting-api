// Util function capitalize the first letter of each word in a string

function capWordUtil(paintingTitle) {
    // Split the title of the painting by each word
    paintingTitle = paintingTitle.split(" ");

    // Capitalize the first letter of each word
    for (let y = 0, x = paintingTitle.length; y < x; y++) {
        paintingTitle[y] = paintingTitle[y][0].toUpperCase() + paintingTitle[y].substr(1);
    }

    // Put the title back together
    return paintingTitle.join(" ");
};

module.exports = capWordUtil;