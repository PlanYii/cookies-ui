import React from 'react';
import { storiesOf } from '@storybook/react';

import Icon from './icon';

const defaultIcon = () => (
  <>
    <Icon icon="check" size="3x" />
    <Icon icon="times" size="3x" />
    <Icon icon="anchor" size="3x" />
    <Icon icon="trash" size="3x" />
  </>
);

const themeIcon = () => (
  <>
    <Icon icon="check" size="3x" theme="success" />
    <Icon icon="times" size="3x" theme="danger" />
    <Icon icon="anchor" size="3x" theme="primary" />
    <Icon icon="exclamation-circle" size="3x" theme="warning" />
  </>
);
const behaviorIcon = () => (
  <>
    <Icon icon="spinner" size="3x" spin theme="primary" />
    <Icon icon="spinner" pulse size="3x" theme="success" />
  </>
);

storiesOf('Icon Component', module)
  .add('Icon', defaultIcon)
  .add('不同主题 Icon', themeIcon)
  .add('更多行为的 Icon', behaviorIcon, {
    
  });
