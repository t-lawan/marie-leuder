export class NavLinkModel {
    constructor(id, title, external_link, page_id, slug, active = false) {
        this.id = id;
        this.title = title;
        this.external_link = external_link;
        this.page_id = page_id;
        this.active = active;
        this.slug = slug;
    }
}