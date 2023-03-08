export default class PageOptions {
    title = '';
    icon = '';
    author = '';
    description = '';
    language = '';

    constructor({title, icon, author, description, language}) {
        this.title = title ?? 'Portfolio'
        this.icon = icon ?? ''
        this.author = author ?? ''
        this.description = description ?? 'My Portfolio'
        this.language = language ?? 'en-US'
    }
}