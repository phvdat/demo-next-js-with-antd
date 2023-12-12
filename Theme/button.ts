import { MappingAlgorithm } from 'antd';
import { ComponentToken } from 'antd/es/button/style';
import { AliasToken } from 'antd/es/theme/internal';

export const buttonConfig:
  | (Partial<ComponentToken> &
      Partial<AliasToken> & {
        algorithm?: boolean | MappingAlgorithm | MappingAlgorithm[] | undefined;
      })
  | undefined = {
  borderRadius: 4,
  // primary button
  colorPrimary: 'rgba(250, 204, 21, 1)',
  colorPrimaryHover: 'rgba(253, 224, 71, 1)',
  colorPrimaryActive: 'rgba(253, 224, 71, 1)',
  primaryColor: '#171717',
  colorPrimaryText: '#171717',
  colorPrimaryTextHover: '#171717',
  primaryShadow: 'none',
  controlHeightLG: 40,
  // default
  textHoverBg: 'transparent',
  algorithm: true
};
