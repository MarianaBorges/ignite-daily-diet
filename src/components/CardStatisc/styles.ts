import styled, { css } from "styled-components/native";

export type CardType = 'primary' | 'secundary';

export interface CardProps{
    type: CardType;
}
 
export const Container = styled.View<CardProps>`
    width: 100%;
    min-height: 89px;
    padding: 16px;

    justify-content: center;
    align-items: center;
    background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT}; 
    border-radius: 8px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.XL}px;
        color: ${theme.COLORS.GRAY_ONE};
    `};
    margin-bottom: 8px;
`;

export const Subtitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
    text-align: center;
`;