export class PageModel {
    constructor(id, title, show_title, slug, template, content, order) {
        this.id = id;
        this.title = title;
        this.show_title = show_title;
        this.slug = slug;
        this.template = template;
        this.content = content;
        this.order = order;
    }
}