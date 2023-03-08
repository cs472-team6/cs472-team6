import { SidePanelState } from "../../state"
import { Tabs } from "../../utils/utils"
import ComponentOptionsTab from "../ComponentOptionsTab/ComponentOptionsTab"
import ComponentsListTab from "../ComponentsListTab/ComponentsListTab"
import Icon from "../Icon/Icon"
import PageOptionsTab from "../PageOptionsTab/PageOptionsTab"

const tabs = [
    {
        name: Tabs.ComponentOptionsTab,
        icon: "list-bullet",
        panel: ComponentOptionsTab
    },
    {
        name: Tabs.ComponentsListTab,
        icon: "cube",
        panel: ComponentsListTab
    },
    {
        name: Tabs.PageOptionsTab,
        icon: "adjustments-horizontal",
        panel: PageOptionsTab
    },
]

function TabButton({icon, selected, selectTab}) {
    return (
        <button 
            className={`py-2 px-3 ${selected ? 'bg-gray-400' : 'hover:bg-gray-300'}`}
            onClick={selectTab}
        >
            <Icon name={icon}/>
        </button>
    )
}

export default function SidePanel() {
    let activeTab = SidePanelState((state) => state.activeTab);
    let setTab = SidePanelState((state) => state.setTab);
    let ActivePanel = tabs.filter((tab) => tab.name === activeTab)[0].panel;
    return (
        <div className="w-80 bg-gray-100 flex flex-col">
            {/* Tab Button Container */}
            <div>
                {tabs.map((tab) => <TabButton key={tab.name} icon={tab.icon} selected={activeTab === tab.name} selectTab={() => setTab(tab.name)}/>)}
            </div>
            <ActivePanel />
        </div>
    )
}