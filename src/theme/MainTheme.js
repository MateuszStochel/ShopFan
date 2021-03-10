const breakpoints = {
  xsm: 360,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const theme = {
  white: "rgb(255,255,255)",
  transparent: "rgba(0,0,0,0)",
  black: "rgb(0,0,0)",
  blackTransparent: "rgba(0,0,0, 0.6)",
  whiteTransparent: "rgba(250,250,250, 0.3)",
  grey: "grey",
  zIndex: {
    l1: "101",
    l2: "201",
    l3: "301",
    l4: "401",
    l5: "501",
    l6: "601",
    l7: "701",
    l8: "801",
    l9: "901",
    l10: "1001",
  },

  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
    return acc;
  }, {}),
};
