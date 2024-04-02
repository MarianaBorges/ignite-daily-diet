import styled, { css } from "styled-components/native";

export type RadioButtonType = 'confirm' | 'deny'

interface Props {
    type: RadioButtonType;
    isSelect?: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.6
})<Props>`
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    min-height: 50px;

    ${({theme, type, isSelect}) => css`
        background-color: ${type === 'confirm' && isSelect ? theme.COLORS.GREEN_LIGHT: 
                            type === 'deny' && isSelect ? theme.COLORS.RED_LIGHT : theme.COLORS.GRAY_SIX};
        border-width: 1px;
        border-radius: 6px;
        border-color: ${type === 'confirm' && isSelect ? theme.COLORS.GREEN_DARK: 
                            type === 'deny' && isSelect ? theme.COLORS.RED_DARK : theme.COLORS.GRAY_SIX};
    `};
`;

export const Circle = styled.View<Props>`
    width: 8px;
    height: 8px;
    border-radius: 4px;
    margin-right: 6px;
    ${({theme, type, isSelect}) => css`
        background-color: ${type === 'confirm' ? theme.COLORS.GREEN_DARK: 
                            type === 'deny' && theme.COLORS.RED_DARK};
    `};
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_ONE};
    `};
`;