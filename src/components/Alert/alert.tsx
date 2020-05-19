import React, { useState } from 'react';
import classNames from 'classnames';

export enum AlertType {
  Success = 'success',
  Default = 'default',
  Info = 'danger',
  Warning = 'warning',
}

interface BaseAlertProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'title'> {
  type?: AlertType;
  closable?: boolean;
  title: string;
  description?: string;
  className?: string;
  onClose?: Function;
}

const Alert: React.FC<BaseAlertProps> = (props) => {
  const {
    type,
    closable,
    title,
    description,
    className,
    onClose,
    ...restProps
  } = props;
  const classes = classNames('cookie-alert', className, {
    [`cookie-alert-${type}`]: AlertType,
  });
  const [show, setShow] = useState(true);

  return (
    <>
      {show ? (
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
              关闭
            </span>
          ) : null}
        </div>
      ) : null}
    </>
  );
};

Alert.defaultProps = {
  type: AlertType.Default,
  closable: false,
};

export default Alert;
