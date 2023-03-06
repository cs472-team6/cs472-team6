export default class Component {
    name;
    renderComponent;
    optionsComponent;

    constructor(name, renderComponent, optionsComponent) {
        this.name = name;
        this.renderComponent = renderComponent;
        this.optionsComponent = optionsComponent;
    }
}