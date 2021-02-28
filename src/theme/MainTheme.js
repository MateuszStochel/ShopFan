const breakpoints = {
  xsm: 360,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
};

export const theme = {
  white: "rgb(255,255,255",
  black: "rgb(0,0,0)",
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]}px)`;
    return acc;
  }, {}),
};
