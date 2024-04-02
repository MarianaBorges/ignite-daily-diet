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

export const Section = styled.View`
    width: 100%;
    gap: 6px;
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  20px;
        color: ${theme.COLORS.GRAY_ONE};`
    };
`;

export const Text = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.MD}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;

export const DataTitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_ONE};`
    };
`;

export const ButtomContent = styled.View`
    width: 100%;
    padding: 10px 24px 24px 24px;
    gap: 8px;
`;