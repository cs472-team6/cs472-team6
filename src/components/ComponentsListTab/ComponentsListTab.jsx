import PageComponent from "../../models/PageComponent";
import { PageState } from "../../state"
import { registeredComponents } from "../../utils/registeredComponents";

export default function ComponentsListTab(){
    
    return (
        <div className="flex flex-col flex-1 items-center overflow-auto font-secondary">
            {Array.from(registeredComponents.values()).map(component => {
                return <ComponentPreview key={component.name} component={component} />;
            })}
        </div>
    )
}

function ComponentPreview({component}) {
    let addComponent = PageState((state) => state.addComponent);
    return (
        <div className="shadow-md w-[300px] mt-4">
            <img src={component.componentPreview} alt="Component Preview" />
            <div className="flex justify-between p-3">
                <p>{component.name}</p>
                <button onClick={() => addComponent(new PageComponent(component.name, component.defaultOptions))}>Add</button>
            </div>
        </div>
    )
}