import React, { PropsWithChildren, ReactNode } from 'react';
import { Button, ButtonProps } from 'antd';
import styled from '@emotion/styled';

interface ButtonCustomProps
  extends PropsWithChildren,
    ButtonProps,
    IContainerButtonProps {
  prefixIcon?: ReactNode;
}
interface IContainerButtonProps {
  noBorder?: boolean;
  large?: boolean;
}
// Tạo styled component bằng @emotion/styled
const CustomButton = styled(Button)<ButtonCustomProps>`
  background-color: transparent;
  height: fit-content;
  border: none;
  padding: ${(props) => (props.large ? '16px 32px' : '8px 16px')};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    background-color: #40a9ff;
  }
`;

const ContainerButton = styled.div((props: IContainerButtonProps) => ({
  border: props.noBorder ? 'none' : '2px solid green',
  borderRadius: '4px',
  width: 'fit-content'
}));

const ButtonCustom2 = (props: ButtonCustomProps) => {
  const { children, noBorder, ...rest } = props;
  console.log(noBorder);

  return (
    <ContainerButton noBorder>
      <CustomButton {...rest}>{children}</CustomButton>
    </ContainerButton>
  );
};

export default ButtonCustom2;
