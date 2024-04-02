import { SafeAreaView, ScrollView } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Scroll = styled(ScrollView)`
    flex: 1;
`;
export const Content = styled.View`
    flex: 1;
    padding: 24px;
    gap: 25px;
`;

export const DateTimeContent = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 20px;
`;

export const ButtonsRowContent = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

export const IsInDeitContent = styled.View`
    width: 100%;
`;

export const TitleIsInDeit = styled.Text`
    ${({theme}) => css`
        margin-bottom: 4px;
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;

export const ButtomContent = styled.View`
    width: 100%;
    padding: 10px 24px 24px 24px;
`;