// Creates an import or include function so files can be added
// inside the main index.
function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename).getContent();
}