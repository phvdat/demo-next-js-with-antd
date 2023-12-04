"use client";

import React from "react";
import { ConfigProvider } from "antd";
import theme from "./themeConfig";

const withTheme = (node: JSX.Element) => (
  <>
    <ConfigProvider theme={theme}>{node}</ConfigProvider>
  </>
);

export default withTheme;
