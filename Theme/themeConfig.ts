import { theme as themeAntD, type ThemeConfig } from 'antd';
import { buttonConfig } from './button';
const theme: ThemeConfig = {
  token: {
    // Seed Token
    screenXL: 1400,
    borderRadius: 2
  },
  algorithm: themeAntD.darkAlgorithm,
  components: {
    Button: buttonConfig
  }
};

export default theme;
