import { create } from 'zustand';
import PageOptions from './models/PageOptions';
import { Tabs } from './utils';

export const SidePanelState = create((set) => ({
    activeTab: Tabs.ComponentOptionsTab,
    setTab: (newTab) => set({activeTab: newTab})
}))

export const PageState = create((set) => ({
    componentsList: [],
    pageOptions: new PageOptions({}),
}))
