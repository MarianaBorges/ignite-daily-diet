import styled, { css } from "styled-components/native";

export type CircleType = 'primary' | 'secundary';

interface CircleProps {
    type: CircleType;
}

export const Container = styled.View`
    width: 144px;
    height: 34px;
    border-radius: 17px;
    flex-direction: row;
    gap: 6px;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.GRAY_SIX };
`;

export const Circle = styled.View<CircleProps>`
    width: 8px;
    height: 8px;
    border-radius: 4px;

    background-color: ${({theme, type}) => type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK };
`;

export const Text = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_ONE};
    `};
`;