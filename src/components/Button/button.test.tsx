import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Button, { ButtonProps } from './button'

const defaultProps = {
  onClick: jest.fn()
}

const testProps:ButtonProps = {
  btnType: 'primary',
  size: 'lg',
  className: 'test-class'
}

const disabledProps: ButtonProps = {
  disabled: true,
  onClick: jest.fn()
}

describe('test Button component', () => {
  it('should render the correct defalut button', () => {
    const wrapper = render(<Button {...defaultProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element?.tagName).toEqual('BUTTON')
    expect(element).toHaveClass('cookie-btn cookie-btn-default')
    expect(element.disabled).toBeFalsy()
    fireEvent.click(element)
    expect(defaultProps.onClick).toHaveBeenCalled()
  })
  it('should render the correct conponent based on different props', () => {
    const wrapper = render(<Button {...testProps}>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('cookie-btn-primary cookie-btn-lg test-class')
  })
  it('should render a link when btnType equals link and href is provided', () => {
    const wrapper = render(<Button btnType="link" href="http://cookie.url">Link</Button>);
    const element = wrapper.getByText('Link');
    expect(element?.tagName).toEqual('A');
    expect(element).toHaveClass('cookie-btn cookie-btn-link')
  })
  it('should render disabled button when disabled set to true', () => {
    const wrapper = render(<Button {...disabledProps}>Nice</Button>);
    const element = wrapper.getByText('Nice') as HTMLButtonElement;
    expect(element).toBeInTheDocument();
    expect(element.disabled).toBeTruthy()
    fireEvent.click(element)
    expect(disabledProps.onClick).not.toHaveBeenCalled()
  })
})
