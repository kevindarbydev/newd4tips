import "prism-themes/themes/prism-dracula.css";
import "prismjs/plugins/command-line/prism-command-line.css";

import * as React from "react";
import QueryWrapper from "./src/context/QueryWrapper";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    // eslint-disable-next-line react/jsx-filename-extension
    <link
      rel="preload"
      href="static/fonts/Inter-roman.var.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="interFont"
    />,
  ]);
};
export const wrapRootElement = QueryWrapper;
