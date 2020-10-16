/**
 * @fileoverview Adds custom function to make editing sheets easier
 * @OnlyCurrentDoc
 *
 * Inspiration
 * https://github.com/gsuitedevs/apps-script-samples/blob/master/sheets/dateAddAndSubtract/dateAddAndSubtract.gs
 */

/**
 * Runs when the add-on is installed.
 */
function onInstall(e) {
    SpreadsheetApp.getUi().alert("Starting");
    onOpen();
}

/**
 * Runs when the document is opened, creating the add-on's menu. Custom function
 * add-ons need at least one menu item, since the add-on is only enabled in the
 * current spreadsheet when a function is run.
 */
function onOpen() {
    const ui = SpreadsheetApp.getUi(); // Or DocumentApp or SlidesApp or FormApp.

    const menuData = {
        topName: "FAST2",
        items: [
            {
                name: "Aktivera funktioner",
                func: "use",
            },
        ],
    };

    const menu = new Menu(ui);
    menu.addMenu(menuData);
}

/**
 * Enables the add-on on for the current spreadsheet (simply by running) and
 * shows a popup informing the user of the new functions that are available.
 */
function use() {
    var title = "FAST2 funktioner";
    var message = `Du har nu aktiverat FAST2s egenutvecklade funktioner för detta dokument!`;
    var ui = SpreadsheetApp.getUi();
    ui.alert(title, message, ui.ButtonSet.OK);
}
