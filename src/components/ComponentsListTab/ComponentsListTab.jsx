import PageComponent from "../../models/PageComponent";
import { PageState } from "../../state"
import { registeredComponents } from "../../utils/registeredComponents";

export default function ComponentsListTab(){
    
    return (
        <div className="flex-1">
            {Array.from(registeredComponents.values()).map(component => {
                return <ComponentPreview key={component.id} component={component} />;
            })}
        </div>
    )
}

function ComponentPreview({component}) {
    let addComponent = PageState((state) => state.addComponent);
    return (
        <div>
            <img src={component.componentPreview} alt="Component Preview" />
            <div className="flex">
                <p>{component.name}</p>
                <button onClick={() => addComponent(new PageComponent(component.name, component.defaultOptions))}>Add</button>
            </div>
        </div>
    )
}