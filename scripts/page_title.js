/**
 * Page Title Helper
 * @description Generate page title.
 * @example
 *     <%- page_title() %>
 */
hexo.extend.helper.register("page_title", function () {
    var title = this.config.title
    if (this.config.subtitle) {
        title += ' - ' + this.config.subtitle;
    }

    if (this.is_archive()) {
        title = this.__("nav.articles");

        if (this.is_month()) {
            title += ": " + this.page.year + "/" + this.page.month;
        } else if (this.is_year()) {
            title += ": " + this.page.year;
        }
    } else if (this.is_category()) {
        title = this.__("nav.category") + ": " + this.page.category;
    } else if (this.is_tag()) {
        title = this.__("nav.tag") + ": " + this.page.tag;
    } else if (this.is_post()) {
        title = this.page.title + ' - ' + this.config.title;
    }

    return title;
});
