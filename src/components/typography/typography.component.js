import React from "react";
import styled from "styled-components/native";

// TODO:
// Have functions that generate different style strings
// Depending on the variant + theme provided

const defautTextStyles = (theme) => {
  return `
    font-family: ${theme.fonts.body}
    font-weight: ${theme.fontWeights.medium}
    font-size: ${theme.fontSizes.body}
    color: ${theme.colors.text.secondary}
    `;
};

const body = (theme) => `
font-family: ${theme.fonts.heading}
`;

const label = (theme) =>
  `
font-family: ${theme.fonts.monospace}
`;

const innerTitle = (theme) => `
font-family: ${theme.fonts.heading}
font-size: ${theme.fontSizes.title}
`;

const error = theme => `
color: ${theme.colors.text.error}
font-family: ${theme.fonts.monospace}
font-size: ${theme.fontSizes.caption}
`
const caption = theme => `
font-family: ${theme.fonts.body}
`
const variants = {
  body,
  label,
  innerTitle,
  error,
  caption,
};
export const Text = styled.Text`
  ${({ theme }) => defautTextStyles(theme)}
  ${({ theme, variant }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
