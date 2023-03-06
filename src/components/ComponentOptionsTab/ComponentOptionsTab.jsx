import { PageState } from "../../state"
import {registeredComponents} from "../../utils/registeredComponents";

export default function ComponentOptionsTab(){
    let componentsList = PageState((state) => state.componentsList)
    let updateComponentOptions = PageState((state) => state.updateComponentOptions)
    return (
        <div className="flex flex-col flex-1 items-center overflow-auto">
            {componentsList.map((component) => {
                let ComponentOptions = registeredComponents.get(component.name)?.optionsComponent ?? null;
                if (!ComponentOptions) {
                    return null;
                }
                return (
                    <details className="bg-white w-[300px] rounded-lg mt-3" key={component.id}>
                        <summary className="p-3 cursor-pointer">{component.name}</summary>
                        <ComponentOptions key={component.id} options={component.options} updateComponent={(options) => updateComponentOptions(component.id, options)}/>
                    </details>
                )
            })}
        </div>
    )
}