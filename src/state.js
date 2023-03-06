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
    updatePageOptions: (newOptions) => set((state) => ({pageOptions: {...state.pageOptions, ...newOptions}}))
}))
