class Sidebar {
    constructor(sidebarData) {
        this.sidebarData = sidebarData;
    }

    show() {
        const html = HtmlService.createTemplateFromFile(
            this.sidebarData.html
        ).evaluate();
        html.setTitle(this.sidebarData.title).setWidth(300);
        ui.showSidebar(html);
    }
}
