export class NavLinkModel {
    constructor(id, title, page_id, page_ids, order) {
        this.id = id;
        this.title = title;
        this.order = order;
        this.page_id = page_id;
        this.page_ids = page_ids;
    }
}