import styled, { css } from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;

    background-color: ${({theme}) => theme.COLORS.GRAY_TWO};
    opacity: 0.9;
`;

export const Content = styled.View`
    width: 327px;
    height: 192px;
    background-color: ${({theme}) => theme.COLORS.WHITE};
    border-radius: 8px;
`;

export const ModalContent = styled.View`
    flex: 1;
    padding: 20px;
    border-radius: 8px;

    background-color: ${({theme}) => theme.COLORS.WHITE};
`;


export const TitleContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`
export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.LG}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
    text-align: center;
`;

export const ButtonWrapper = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ButtonContent = styled.View`
  width: 140px ;
`;