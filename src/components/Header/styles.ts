import { ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type TypeHeader = 'primary' | 'secundary' | null;

interface StyleProps {
    type: TypeHeader;
}

export const Container = styled.View<StyleProps>`
    width: 100%;
    height: 132px;
    justify-content: space-between;
    background-color: ${({theme, type }) => type === null ? theme.COLORS.GRAY_FIVE : type === 'primary' ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
`;

export const TitleContent = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const ContainerDetails = styled.View`
    width: 100%;
    height: 20px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;

    background-color: ${({theme}) => theme.COLORS.WHITE};  
`;

export const Title = styled.Text`
    ${({theme}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.LG}px;
        color: ${theme.COLORS.GRAY_TWO};
    `};
`;

export const GoBackButton = styled(TouchableOpacity)`
    width: 30px;
    height: 30ṕx;
    position: absolute;
    left: 24px;
`;

export const GoBackIcon = styled(ArrowLeft).attrs<StyleProps>(({ theme, type }) => ({
    size: 24,
    color: type === null ? theme.COLORS.GRAY_TWO : type === 'primary' ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK,
}))``;
