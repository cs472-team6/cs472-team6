import { create } from 'zustand';
import PageOptions from './models/PageOptions';
import { Direction, Tabs } from './utils/utils';

export const SidePanelState = create((set) => ({
    activeTab: Tabs.ComponentOptionsTab,
    setTab: (newTab) => set({activeTab: newTab})
}))

export const SidePanelVisibility = create((set) => ({
    isVisible: false,
    setVisibility: (isVisible) => set(() => ({ isVisible: isVisible }))
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

    }),
    moveComponent: (id, direction) => set((state) => {
        let componentIndex = -1;
        // look for index of specified id (component)
        for (let i = 0; i < state.componentsList.length; i++){
            if (state.componentsList[i].id === id){
                componentIndex = i;
            }
        }

        // component not found
        if (componentIndex === -1){
            console.log('component not found!!')
            return ({ componentsList: state.componentsList })
        }
        // component already at top or bottom
        if ((componentIndex === 0 && direction === Direction.UP) || (componentIndex === state.componentsList.length - 1 && direction === Direction.DOWN)){
            return ({ componentsList: state.componentsList })
        }

        let components = Array.from(state.componentsList);
        
        if (direction === Direction.UP) { // move component up
            components[componentIndex-1] = components.splice(componentIndex, 1, components[componentIndex-1])[0];
        } else if (direction === Direction.DOWN) { // move component down
            components[componentIndex+1] = components.splice(componentIndex, 1, components[componentIndex+1])[0];
        }

        return ({ componentsList: components })

    }),
    removeComponent: (id) => set((state) => ({ componentsList: state.componentsList.filter(component => component.id !== id) }))
}))
