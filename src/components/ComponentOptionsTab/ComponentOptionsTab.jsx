import { PageState } from "../../state"
import {registeredComponents} from "../../utils/registeredComponents";

export default function ComponentOptionsTab(){
    let componentsList = PageState((state) => state.componentsList)
    return (
        <div className="flex-1">
            {componentsList.map((component) => {
                let ComponentOptions = registeredComponents.get(component.name)?.optionsComponent ?? null;
                if (!ComponentOptions) {
                    return null;
                }
                return <ComponentOptions key={component.id} />;
            })}
        </div>
    )
}