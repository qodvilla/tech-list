import React from "react";
import { View } from "react-native";
import styled, { useTheme } from "styled-components";

// small, medium or large.

const sizeVariants = {
  small: 1,
  medium: 2,
  large: 3,
};

const positionVariants = {
  top: "margin-top",
  right: "margin-right",
  bottom: "margin-bottom",
  left: "margin-left",
};

const getVariant = (position, size, theme) => {
  const sizeIndex = sizeVariants[size];
  return `
    ${positionVariants[position]}: ${theme.space[sizeIndex]}
    `;
};

const SpacerView = styled(View)`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size, children }) => {
  const theme = useTheme();
  const variant = getVariant(position, size, theme);
  return <SpacerView variant={variant}>{children}</SpacerView>;
};
