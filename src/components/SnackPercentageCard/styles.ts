import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export interface CardProps{
    isGreen: boolean;
}
 
export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})<CardProps>`
    width: 100%;
    height: 106px;
    align-items: center;
    justify-content: center;
    background-color: ${({theme, isGreen}) => isGreen ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
    border-radius: 8px;
    margin-top: 38px;
`;

export const Content = styled.View`
    width: 100%;
    align-items: flex-end;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.XXL}px;
        color: ${theme.COLORS.GRAY_ONE};
    `};
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;

export const Icon = styled(ArrowUpRight).attrs<CardProps>(({ theme, isGreen }) => ({
    size: 24,
    color: isGreen ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))`
    position: absolute;
    top: 11px;
    right: 11px;
`;