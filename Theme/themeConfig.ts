'use client';
import { theme as themeAntD, type ThemeConfig } from 'antd';
import { buttonConfig } from './button';
const theme: ThemeConfig = {
  token: {
    // Seed Token
    // fontSize: 16,
    // colorPrimary: '#52c41a',
    screenXL: 1400,
    borderRadius: 2
  },
  algorithm: localStorage.getItem('darktheme')
    ? themeAntD.darkAlgorithm
    : themeAntD.defaultAlgorithm,
  components: {
    Button: buttonConfig
  }
};

export default theme;
