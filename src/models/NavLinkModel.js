export class NavLinkModel {
    constructor(id, title, page_ids, pages, order) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.page_ids = page_ids;
        this.pages = pages;
    }
}