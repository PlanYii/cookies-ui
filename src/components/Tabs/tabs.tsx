import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { tabItemProps } from './tabItem';

export type tabsType = 'line' | 'card';

export interface tabsProps {
  /** 当前激活 tab 面板的 index，默认为0 */
  defaultIndex?: number;
  /** 可以扩展的 className */
  className?: string;
  /**	点击 Tab 触发的回调函数 */
  onSelect?: (selectedIndex: number) => void;
  /**	Tabs的样式，两种可选，默认为 line */
  type?: tabsType;
}
/**
 * 选项卡切换组件。 提供平级的区域将大块内容进行收纳和展现，保持界面整洁。
 * ### 引用方法
 * ~~~js
 * import { Tabs } from 'cookie-ui'
 * // 然后可以使用 Tabs.TabItem 访问选项卡内容组件
 * ~~~ 
 */
export const Tabs: FC<tabsProps> = (props) => {
  const { className, defaultIndex, onSelect, type, children } = props;
  const [currentActive, setActive] = useState(defaultIndex);
  const classes = classNames('cookie-tabs', className);
  const navClasses = classNames('cookie-tabs-nav', className, {
    'cookie-nav-line': type === 'line',
    'cookie-nav-card': type !== 'line',
  });

  const handleClick = (selectIndex: number) => {
    setActive(selectIndex);
    onSelect && onSelect(selectIndex);
  };
  let childrenView: React.ReactNode;
  const NavElement = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        tabItemProps
      >;
      if (childElement.type.displayName === 'TabItem') {
        const { label, disabled } = childElement.props;
        const liClasses = classNames('cookie-tabs-nav-item', {
          'cookie-tabs-nav-item-active': currentActive === index,
          'cookie-tabs-nav-item-disabled': disabled,
        });
        if (currentActive === index) {
          childrenView = child;
        }
        return (
          <li
            className={liClasses}
            key={index}
            onClick={() => handleClick(index)}
          >
            {label}
          </li>
        );
      } else {
        console.log('Warning: The children of tab can only be tabitem');
      }
    });
  };
  return (
    <div className={classes}>
      <ul className={navClasses}>{NavElement()}</ul>
      <div className="cookie-tabs-content">{childrenView}</div>
    </div>
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line',
};

export default Tabs;
