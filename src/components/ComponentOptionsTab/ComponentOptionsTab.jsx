import { PageState } from "../../state"

export default function ComponentOptionsTab(){
    let componentsList = PageState((state) => state.componentsList)
    return (
        <div className="flex-1">
            {componentsList.map((component) => {
                let ComponentOptions = registeredComponents.get(component.name)?.optionsComponent ?? null;
                return <ComponentOptions />
            })}
        </div>
    )
}