import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Alert from './alert';

const defaultAlert = () => (
  <Alert
    closable
    title="this is Alert"
    type="default"
    onClose={action('closable')}
  />
);

const typeAlert = () => (
  <>
    <Alert
      title="this is Danger"
      type="danger"
    />
    <Alert
      title="this is Success"
      type="success"
    />
    <Alert
      closable={false}
      title="this is Warning"
      type="warning"
    />
  </>
);

const descriptionAlert = () => (<Alert title="标题" type="default" description="描述" onClose={action('closable')}/>)

storiesOf('Alert Component', module)
  .add('Alert', defaultAlert)
  .add('不同样式的 Alert', typeAlert)
  .add('添加描述的 Alert', descriptionAlert);
