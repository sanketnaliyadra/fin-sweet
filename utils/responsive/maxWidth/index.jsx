import { ScreenSize } from "../ScreenSize";

export const maxWidthQueryString = (screenSize) => {
  const pixels = screenSize.valueOf();
  return ` all and (max-width: ${pixels}px)`;
};

export const minWidthQueryString = (screenSize) => {
  const pixels = screenSize.valueOf();
  return `not all and (max-width: ${pixels}px)`;
};

export const maxWidth = (screenSize, css) => {
  return `@media ${maxWidthQueryString(screenSize)} {${css}}`;
};

export const minWidth = (screenSize, css) => {
  return `@media ${minWidthQueryString(screenSize)} {${css}}`;
};

export const minMaxWidth = (minScreenSize, maxScreenSize, css) => {
  return `
    ${maxWidth(
      maxScreenSize,
      `
      ${minWidth(minScreenSize, css)}
    `
    )};
  `;
};
