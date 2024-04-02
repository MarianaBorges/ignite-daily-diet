import styled, { css } from "styled-components/native";

interface StatusProps {
    isInDiet: boolean;
}

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.3
})`
    width: 100%;
    min-height: 49px;
    padding: 12px;
    margin-bottom: 4px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    border-radius: 6px;
    border-width: 2px;
    border-color: ${({theme}) => theme.COLORS.GRAY_FIVE};
`;

export const Time = styled.Text`
     ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.SM}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
    margin: 0px 12px 0px 0px;
`;


export const ContentDescription = styled.View`
    flex: 1;
    border-left-width: 2px;
    border-color: ${({theme}) => theme.COLORS.GRAY_FIVE};
    padding: 0px 0px 0px 12px;
    margin: 0px 12px 0px 0px;
`;

export const Description = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.REGULAR};
        font-size:  ${theme.SIZE.MD}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;

export const Status = styled.View<StatusProps>`
    width: 14px;
    height: 14px;
    border-radius: 7px;
    background-color: ${({theme, isInDiet}) => isInDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID };
`;