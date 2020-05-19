import React from 'react';

export interface tabItemProps {
  index?: number;
  label: any;
  disabled?: boolean;
}

const TabItem: React.FC<tabItemProps> = (props) => {
  const { children } = props;
  return <div className="cookie-tab-panel">{children}</div>;
};

TabItem.displayName = 'TabItem';

export default TabItem;
