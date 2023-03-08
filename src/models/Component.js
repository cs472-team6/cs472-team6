export default class Component {
    name;
    renderComponent;
    optionsComponent;
    componentPreview;
    defaultOptions;

    constructor(name, renderComponent, optionsComponent, componentPreview, defaultOptions) {
        this.name = name;
        this.renderComponent = renderComponent;
        this.optionsComponent = optionsComponent;
        this.componentPreview = componentPreview;
        this.defaultOptions = defaultOptions;
    }
}