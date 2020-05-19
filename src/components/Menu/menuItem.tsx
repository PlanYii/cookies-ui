import React, { useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  disabled?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props;
  const context = useContext(MenuContext);
  const classes = classNames('cookie-menu-item', className, {
    'cookie-menu-item-disabled': disabled,
    'cookie-menu-item-active': context.index === index,
  });
  const handleClick = () => {
    context.onSelect && !disabled && (typeof index === 'string') && context.onSelect(index);
  };
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  );
};

MenuItem.defaultProps = {
  disabled: false,
};

MenuItem.displayName = 'MenuItem';

export default MenuItem;
