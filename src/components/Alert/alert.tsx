import React, { useState } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
import Transition, { AnimationName } from '../Transition/transition';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'title'> {
  type?: AlertType;
  closable?: boolean;
  title: string;
  description?: string;
  className?: string;
  onClose?: Function;
  animation?: AnimationName;
  timeout?: number;
}

const Alert: React.FC<AlertProps> = (props) => {
  const {
    type,
    closable,
    title,
    description,
    className,
    onClose,
    animation,
    timeout = 300,
    ...restProps
  } = props;
  const classes = classNames('cookie-alert', className, {
    [`cookie-alert-${type}`]: type,
  });
  const [show, setShow] = useState(true);

  return (
    <Transition in={show} animation={animation} timeout={timeout}>
      <div className={classes} {...restProps}>
        <span className="cookie-alert-title">{title}</span>
        {description ? (
          <span className="cookie-alert-description">{description}</span>
        ) : null}
        {closable ? (
          <span
            className="cookie-alert-closable"
            onClick={() => {
              setShow(false);
              onClose && onClose();
            }}
          >
            <Icon icon="times" />
          </span>
        ) : null}
      </div>
    </Transition>
  );
};

Alert.defaultProps = {
  type: 'default',
  closable: false,
  animation: 'zoom-in-left',
};

export default Alert;
