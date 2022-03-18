import styled from "styled-components/native";
import { Button, Card, Title, Paragraph, Divider } from "react-native-paper";
import { Text as RnText } from 'react-native';


export const Text = styled(Title)`
font-size: ${({ theme }) => theme.fontSizes.h5}
color: ${({ theme }) => theme.colors.text.primary}
font-family: ${({ theme }) => theme.fonts.heading}
`;

export const ButtonText = styled(RnText)`
color: ${({ theme }) => theme.colors.text.primary}
font-weight: ${({ theme }) => theme.fontWeights.bold}
`;

export const ParagraphText = styled(Paragraph)`
font-family: ${({ theme }) => theme.fonts.body}
font-weight: ${({ theme }) => theme.fontWeights.medium}
font-size: ${({ theme }) => theme.fontSizes.body}
color: ${({ theme }) => theme.colors.text.secondary}
`;

export const DetailsCard = styled(Card)`
  margin: ${({ theme }) => theme.space[3]};
`;

export const CardContent = styled(Card.Content)`
  margin-top: ${({ theme }) => theme.space[2]};
`;

export const BuyButton = styled(Button).attrs({ color: "#faae2b" })`
  padding: ${({ theme }) => theme.space[0]} ${({ theme }) => theme.space[3]};
`;
export const CardActions = styled(Card.Actions)`
  padding: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[0]}
    ${({ theme }) => theme.space[0]};
`;
