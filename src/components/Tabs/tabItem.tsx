import React, { FC } from 'react';

export interface tabItemProps {
  /**	Tab选项上面的文字 */
  label: any;
  /**	Tab选项是否被禁用 */
  disabled?: boolean;
}

export const TabItem: FC<tabItemProps> = (props) => {
  const { children } = props;
  return <div className="cookie-tab-panel">{children}</div>;
};

TabItem.displayName = 'TabItem';

export default TabItem;
