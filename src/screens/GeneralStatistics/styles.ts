import { SafeAreaView, TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { ArrowLeft } from "phosphor-react-native";

import { CardType } from "@components/CardStatisc/styles";

interface HeaderProps {
    type: CardType
}

export const Container = styled(SafeAreaView)<HeaderProps>`
    flex: 1;
    background-color: ${({ theme, type }) => type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const Header = styled.View`
    width: 100%;
    height: 168px;
    margin-top: 15px;

    justify-content: center;
    align-items: center;
`;

export const GoBackButton = styled(TouchableOpacity).attrs({
    activeOpacity: 0.3
})`
    position: absolute;
    top: 24px;
    left: 24px;

    width: 24px;
    height: 24px;
`;

export const GoBackIcon = styled(ArrowLeft).attrs<HeaderProps>(({ theme, type }) => ({
    size: 24,
    color: type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;

export const TitleHeader = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.XXL}px;
        color: ${theme.COLORS.GRAY_THREE};
    `};
`;

export const SubtleHeader = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;

export const Content = styled.View `
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.WHITE};
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 34px 24px 0px 24px;

    align-items: center;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_ONE};
    `};
    margin-bottom: 24px;
`;

export const StatisticContent = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 10px;
`;

export const CardContent = styled.View`
    width: 48%;
`;