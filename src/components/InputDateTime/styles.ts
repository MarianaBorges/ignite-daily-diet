import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
`;

export const Title = styled.Text`
     ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;
export const InputData = styled.TouchableOpacity`
    width: 100%;
    margin-top: 4px;
    padding-left: 12px;
    justify-content: center;
    align-items: flex-start;
    border-width: 1px;
    border-radius: 6px;
    border-color: ${({theme}) => theme.COLORS.GRAY_FIVE};
    min-height: 48px;
`;

export const Text = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.MD}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;
