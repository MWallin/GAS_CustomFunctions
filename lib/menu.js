class Menu {
    constructor(ui) {
        this.ui = ui;
    }

    addMenu(menuData) {
        const newMenu = this.ui.createMenu(menuData.topName);
        for (const menuItem of menuData.items) {
            newMenu.addItem(menuItem.name, menuItem.func);
        }
        newMenu.addToUi();
    }
}
