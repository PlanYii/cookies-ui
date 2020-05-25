import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Menu from './menu';
import SubMenu from './subMenu';
import MenuItem from './menuItem';

const defaultMenu = () => (
  <Menu
    defaultIndex="0"
    defaultOpenSubMenus={[]}
    mode="horizontal"
    onSelect={action('selected')}
  >
    <MenuItem>item 1</MenuItem>
    <MenuItem>item 2</MenuItem>
    <MenuItem disabled>disabled</MenuItem>
    <SubMenu title="submenu">
      <MenuItem>submenu item 1</MenuItem>
      <MenuItem>submenu item 2</MenuItem>
    </SubMenu>
  </Menu>
);

const verticalMenu = () => (
  <Menu
    defaultIndex="0"
    defaultOpenSubMenus={[]}
    mode="vertical"
    onSelect={action('selected')}
  >
    <MenuItem>item 1</MenuItem>
    <MenuItem>item 2</MenuItem>
    <SubMenu title="submenu">
      <MenuItem>submenu item 1</MenuItem>
      <MenuItem>submenu item 2</MenuItem>
    </SubMenu>
  </Menu>
);

const verticalMenuOpen = () => (
  <Menu
    defaultIndex="0"
    defaultOpenSubMenus={['2']}
    mode="vertical"
    onSelect={action('selected')}
  >
    <MenuItem>item 1</MenuItem>
    <MenuItem>item 2</MenuItem>
    <SubMenu title="submenu">
      <MenuItem>submenu item 1</MenuItem>
      <MenuItem>submenu item 2</MenuItem>
    </SubMenu>
  </Menu>
);

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)
  .add('纵向的 Menu', verticalMenu)
  .add('默认展开的纵向 Menu', verticalMenuOpen);
