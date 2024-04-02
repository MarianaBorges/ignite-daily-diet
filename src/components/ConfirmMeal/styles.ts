import styled, { css } from "styled-components/native";

export interface ModalProps {
    isInDiet: boolean;
}

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    gap: 40px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    padding: 24px;
`;

export const TitleContent = styled.View`
    justify-content: center;
    align-items: center;
    gap: 5px;
`;

export const Title = styled.Text<ModalProps>`
    ${({theme, isInDiet}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.XL}px;
        color: ${isInDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
    `};
`;

export const SubTitle = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.MD}px;
        color: ${theme.COLORS.GRAY_ONE};
    `};
    text-align: center;
`;

export const Image = styled.Image``;

export const ButtonContent = styled.View`
    width: 191px;
`;