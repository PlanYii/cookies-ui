import React, { useState } from 'react';
import classNames from 'classnames';
import { tabItemProps } from './tabItem';

export type tabsType = 'line' | 'card';

type SelectCallback = (selectIndex: number) => void;

interface tabsProps {
  defaultIndex?: number;
  className?: string;
  onSelect?: SelectCallback;
  type?: tabsType;
}

const Tabs: React.FC<tabsProps> = (props) => {
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
  let childrenView:React.ReactNode;
  const NavElement = () => {
    return React.Children.map(children, (child, index) => {

      const childElement = child as React.FunctionComponentElement<
        tabItemProps
      >;
      if (childElement.type.displayName === 'TabItem') {
        const { label, disabled} = childElement.props;
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
