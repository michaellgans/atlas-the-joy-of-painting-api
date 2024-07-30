// Exploring Regex Patterns in a JavaScript File

function pullValues() {
    // String to search through
    let str = '"A Walk in the Woods" (January 11, 1983)';

    // Regex patterns
    // Find any number of characters that aren't " between two ".
    let paintingTitle = /"([^"]*)"/;
    // Finds the first "word" after the first (
    let date = /\((\w+)/ ;
    let titleResult = str.match(paintingTitle);
    let dateResult = str.match(date);

    if (titleResult && titleResult[1]) {
        console.log(titleResult[1]);
    } else {
        console.log("Couldn't match title.");
    }

    if (dateResult && dateResult[1]) {
        console.log(dateResult[1]); 
    } else {
        console.log("Couldn't match date.");
    }
}

pullValues();
