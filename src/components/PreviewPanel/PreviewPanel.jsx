import { PageState } from "../../state"
import { registeredComponents } from "../../utils/registeredComponents";

export default function PreviewPanel() {
    const componentsList = PageState((state) => state.componentsList);
    return (
        <div className="flex-1 overflow-auto dark:bg-black">
            {componentsList.map((component) => {
                let PreviewComponent = registeredComponents.get(component.name)?.renderComponent ?? null;
                if (!PreviewComponent) {
                    return null;
                }
                return (
                    <PreviewComponent key={component.id} options={component.options}/>
                )
            })}
        </div>
    )
}