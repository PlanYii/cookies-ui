import React, { useContext, useState, FunctionComponentElement } from 'react';
import classNames from 'classnames';
import { MenuContext } from './menu';
import { MenuItemProps } from './menuItem';

export interface SubMenuProps {
  index?: string;
  title: string;
  className?: string;
}

const SubMenu: React.FC<SubMenuProps> = ({
  index,
  className,
  title,
  children,
}) => {
  const context = useContext(MenuContext);
  const openSubMenus = context.defaultOpenSubMenus as Array<string>
  const isOpend = (index && context.mode === 'vertical') ? openSubMenus.includes(index) : false;
  const [menuOpen, setMenuOpen] = useState(isOpend);
  const classes = classNames(
    'cookie-menu-item cookie-submenu-item',
    className,
    {
      'cookie-submenu-active': context.index === index,
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
          index: `${index}-${i}`
        });
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component'
        );
      }
    });
    return <ul className={subMenuClasses}>{childrenComponent}</ul>;
  };

  return (
    <li key={index} className={classes} {...hoverEvents}>
      <div
        className="cookie-submenu-title"
        onClick={handleClick}
        {...clickEvents}
      >
        {title}
      </div>
      {renderChildern()}
    </li>
  );
};

SubMenu.displayName = 'SubMenu';

export default SubMenu;
