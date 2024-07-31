// Util function capitalize the first letter of each word in a string

function capWordUtil(paintingTitle, delimiter) {
    // Split the title of the painting by each word
    if (delimiter === " ") {
        paintingTitle = paintingTitle.split(" ");
    }
    if (delimiter === ",") {
        paintingTitle = paintingTitle.split(",");
    }

    // Capitalize the first letter of each word
    for (let y = 0, x = paintingTitle.length; y < x; y++) {
        paintingTitle[y] = paintingTitle[y][0].toUpperCase() + paintingTitle[y].substr(1);
    }

    // Put the title back together
    if (delimiter === " ") {
        return paintingTitle.join(" ");
    }
    if (delimiter === ",") {
        return paintingTitle.join(",");
    }
};

module.exports = capWordUtil;