import { theme as themeAntD, type ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
    // fontSize: 16,
    // colorPrimary: '#52c41a',
    // screenXL: 1400
    colorPrimary: '#00b96b',
    borderRadius: 2,
    blue1: 'green',

    // Alias Token
    colorBgContainer: 'transparent'
  },
  // algorithm: themeAntD.compactAlgorithm,
  components: {
    Form: {
      colorError: 'red',
      fontSize: 12
    },
    Button: {}
  }
};

export default theme;
