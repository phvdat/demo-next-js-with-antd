import { theme as themeAntD, type ThemeConfig } from 'antd';

const theme: ThemeConfig = {
  token: {
		
    // Seed Token
    // fontSize: 16,
    // colorPrimary: '#52c41a',
    screenXL: 1400,
    colorPrimary: '#00b96b',
    borderRadius: 2,

    // Alias Token
    colorBgContainer: 'transparent',
    // ColorPalettes
    blue1: 'green',
    blue2: 'blue',
    'blue-10': 'blue',
    red1: 'red'
  },
  // algorithm: themeAntD.defaultAlgorithm,
  components: {
    Form: {
      colorError: 'red',
      fontSize: 12
    },
    Button: {
      borderRadius: 16
    }
  }
};

export default theme;
