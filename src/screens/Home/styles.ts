import { SafeAreaView } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 24px;
    padding-top: 40px;
`;

export const TitleSection = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.LG}px;
        color: ${theme.COLORS.GRAY_ONE};
    `};
    margin-top: 26px;
    margin-bottom:10px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.MD}px;
        color: ${theme.COLORS.GRAY_ONE};
    `};
    margin-bottom: 12px
`;

export const Content = styled.View`
    width: 100%;
    margin-top: 40px;
    margin-bottom: 12px;
`;