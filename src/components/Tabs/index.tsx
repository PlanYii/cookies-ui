import { FC } from 'react';
import Tabs, { tabsProps } from './tabs';
import TabItem, { tabItemProps } from './tabItem';

export type ITabsComponent = FC<tabsProps> & {
  TabItem: FC<tabItemProps>;
};

const TransTabs = Tabs as ITabsComponent;

TransTabs.TabItem = TabItem;

export default TransTabs;
