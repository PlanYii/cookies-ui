import React, { FC, useContext } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';

export interface MenuItemProps {
  index?: string;
  /** 选项是否被禁用 */
  disabled?: boolean;
  /** 选项扩展的 className */
  className?: string;
  /** 选项的自定义 style */
  style?: React.CSSProperties;
}

export const MenuItem: FC<MenuItemProps> = (props) => {
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
