import { TextInput } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View``;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;

export const InputText = styled(TextInput)`
    margin-top: 4px;
    padding-left: 12px;
    padding-right: 12px;
    border-width: 1px;
    border-radius: 6px;
    border-color: ${({theme}) => theme.COLORS.GRAY_FIVE};
    min-height: 48px;
`;