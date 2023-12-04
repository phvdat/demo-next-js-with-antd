/** @jsxImportSource @emotion/react */

import { PropsWithChildren, ReactNode } from 'react';
import { Button, ButtonProps } from 'antd';
import { buttonStyle } from './ButtonStyle';
import { SerializedStyles, Theme } from '@emotion/react';

interface ButtonCustomProps extends PropsWithChildren, ButtonProps {
  prefixIcon?: ReactNode;
  customSelf?: SerializedStyles | ((params: Theme) => SerializedStyles);
}

const ButtonCustom = (props: ButtonCustomProps) => {
  const { children, prefixIcon, customSelf, ...rest } = props;
  return (
    <div css={[buttonStyle.containerButton, customSelf]}>
      {prefixIcon}
      <Button css={buttonStyle.button} {...rest}>
        {children}
      </Button>
    </div>
  );
};

export default ButtonCustom;
