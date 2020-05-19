import React from 'react';
import {
  render,
  RenderResult,
  fireEvent,
  cleanup,
  wait,
} from '@testing-library/react';
import Menu, { MenuProps } from './menu';
import MenuItem from './menuItem';
import SubMenu from './subMenu';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
};
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical',
};
const GenerateMenu = (props: MenuProps) => {
  return (
    <Menu {...props}>
      <MenuItem>active</MenuItem>
      <MenuItem disabled>disabled</MenuItem>
      <MenuItem>default</MenuItem>
      <SubMenu title="dropdown">
        <MenuItem>drop1</MenuItem>
      </SubMenu>
    </Menu>
  );
};
const createStyleFile = () => {
  const cssFile: string = `
    .cookie-submenu {
      display: none;
    }
    .cookie-submenu.cookie-submenu-opened {
      display: block;
    }
  `;
  const style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = cssFile;
  return style;
};
let wrapper: RenderResult,
  menuElement: HTMLElement,
  activeElement: HTMLElement,
  disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(GenerateMenu(testProps));
    wrapper.container.append(createStyleFile());
    menuElement = wrapper.getByTestId('test-menu');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  });
  it('should render correct Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('cookie-menu test');
    expect(menuElement.querySelectorAll(':scope > li').length).toEqual(4);
    expect(activeElement).toHaveClass(
      'cookie-menu-item cookie-menu-item-active'
    );
    expect(disabledElement).toHaveClass(
      'cookie-menu-item cookie-menu-item-disabled'
    );
  });
  it('click items should change active and call the right callback', () => {
    const thirdItem = wrapper.getByText('default');
    fireEvent.click(thirdItem);
    expect(thirdItem).toHaveClass('cookie-menu-item-active');
    expect(activeElement).not.toHaveClass('cookie-menu-item-active');
    expect(testProps.onSelect).toHaveBeenCalledWith('2');
    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('cookie-menu-item-active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith('1');
  });
  it('should render vertical mode when mode is set to vertical', () => {
    cleanup();
    const wrapper = render(GenerateMenu(testVerProps));
    const menuElement = wrapper.getByTestId('test-menu');
    expect(menuElement).toHaveClass('cookie-menu-vertical');
  });
  it('should show dropdown items when hover on subMenu', async () => {
    expect(wrapper.queryByText('drop1')).not.toBeVisible();
    const dropdowElement = wrapper.getByText('dropdown')
    fireEvent.mouseEnter(dropdowElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).toBeVisible();
    })
    fireEvent.click(wrapper.getByText('drop1'))
    expect(testProps.onSelect).toHaveBeenCalledWith('3-0')
    fireEvent.mouseLeave(dropdowElement)
    await wait(() => {
      expect(wrapper.queryByText('drop1')).not.toBeVisible();
    })
  });
});
