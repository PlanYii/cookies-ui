import React, { FC, useContext, useState, FunctionComponentElement } from 'react';
import classNames from 'classnames';
import Transition from '../Transition/transition';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';
import Icon from '../Icon/icon';

export interface SubMenuProps {
  index?: string;
  /** 下拉菜单选项的文字 */
  title: string;
  /** 下拉菜单选型的扩展类名 */
  className?: string;
}

export const SubMenu: FC<SubMenuProps> = ({
  index,
  className,
  title,
  children,
}) => {
  const context = useContext(MenuContext);
  const openSubMenus = context.defaultOpenSubMenus as Array<string>;
  const isOpend =
    index && context.mode === 'vertical' ? openSubMenus.includes(index) : false;
  const [menuOpen, setMenuOpen] = useState(isOpend);
  const classes = classNames(
    'cookie-menu-item cookie-submenu-item',
    className,
    {
      'cookie-submenu-active': context.index.split('-')[0] === index,
      'cookie-is-opened': menuOpen,
      'cookie-is-vertical': context.mode === 'vertical',
    }
  );
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setMenuOpen(!menuOpen);
  };
  let timer: any;
  const handleMouse = (e: React.MouseEvent, toogle: boolean) => {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(() => {
      setMenuOpen(toogle);
    }, 300);
  };
  const clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleClick,
        }
      : {};
  const hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: (e: React.MouseEvent) => handleMouse(e, true),
          onMouseLeave: (e: React.MouseEvent) => handleMouse(e, false),
        }
      : {};
  const renderChildern = () => {
    const subMenuClasses = classNames('cookie-submenu', {
      'cookie-submenu-opened': menuOpen,
    });
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as FunctionComponentElement<MenuItemProps>;
      if (childElement.type.displayName === 'MenuItem') {
        return React.cloneElement(childElement, {
          index: `${index}-${i}`,
        });
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component'
        );
      }
    });
    return (
      <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
        <ul className={subMenuClasses}>{childrenComponent}</ul>
      </Transition>
    );
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div
        className="cookie-submenu-title"
        onClick={handleClick}
        {...clickEvents}
      >
        {title}
        <Icon icon="angle-down" className="cookie-arrow-icon" />
      </div>
      {renderChildern()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
