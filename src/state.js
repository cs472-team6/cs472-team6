import { create } from 'zustand';
import PageOptions from './models/PageOptions';
import { Tabs } from './utils/utils';

export const SidePanelState = create((set) => ({
    activeTab: Tabs.ComponentOptionsTab,
    setTab: (newTab) => set({activeTab: newTab})
}))

export const PageState = create((set) => ({
    componentsList: [],
    pageOptions: new PageOptions({}),
    addComponent: (component) => set((state) => ({componentsList: [...state.componentsList, component]})),
    updatePageOptions: (newOptions) => set((state) => ({pageOptions: {...state.pageOptions, ...newOptions}})),
    updateComponentOptions: (id, options) => set((state)=> {
        let components = Array.from(state.componentsList);

        components.map(component => {
            if (component.id === id) {
                component.options = {...component.options, ...options};
                return component;
            }
            return component;
        });

        return ({ componentsList: components });

    })
}))
