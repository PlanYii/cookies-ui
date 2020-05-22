import React, { useState, FC, HTMLAttributes } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/icon';
import Transition from '../Transition/transition';

export type AlertType = 'success' | 'default' | 'danger' | 'warning';

interface baseAlertProps {
  /** 类型 四种可选 针对四种不同的场景 */
  type?: AlertType;
  /** 是否显示关闭图标 */
  closable?: boolean;
  /** 标题 */
  title: string;
  /** 描述 */
  description?: string;
  className?: string;
  /** 关闭alert时触发的事件 */
  onClose?: () => void;
}

type AlertProps = baseAlertProps &  Omit<HTMLAttributes<HTMLSpanElement>, 'title'> 
/**
 * 用于页面中展示重要的提示信息。 点击右侧的叉提示自动消失
 * ### 引用方法
 * ~~~js
 * import { Alert } from 'cookie-ui'
 * ~~~ 
 */
export const Alert: FC<AlertProps> = (props) => {
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
    [`cookie-alert-${type}`]: type,
  });
  const [show, setShow] = useState(true);

  return (
    <Transition in={show} animation="zoom-in-top" timeout={300}>
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
  closable: true
};

export default Alert;
