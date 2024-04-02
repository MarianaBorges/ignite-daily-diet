import styled, {css} from "styled-components/native";
import { Plus, PencilSimpleLine, Trash } from "phosphor-react-native";

export type StyleButton = 'line' | 'full';

interface Props {
    type: StyleButton;
}

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})<Props>`
    width: 100%;
    height: 50px;
    flex-direction: row;
    border-radius: 6px;
    border-width: 1px;
    align-items: center;
    justify-content: center;

    background-color: ${({theme, type}) => type === "full" ? theme.COLORS.GRAY_TWO : theme.COLORS.WHITE };
`;

export const Title = styled.Text<Props>`
    ${({theme, type}) => css`
        font-family: ${theme.FONTS.BOLD};
        font-size:  ${theme.SIZE.SM}px;
        color: ${type === "full" ? theme.COLORS.WHITE : theme.COLORS.GRAY_TWO};
    `};
    margin-left: 8px;
`;

export const PlusIcon = styled(Plus).attrs(({theme}) => ({
    size: 18,
    color: theme.COLORS.WHITE
}))``;

export const EditIcon = styled(PencilSimpleLine).attrs(({theme}) => ({
    size: 18,
    color: theme.COLORS.WHITE
}))``;

export const TrashIcon = styled(Trash).attrs(({theme}) => ({
    size: 18,
    color: theme.COLORS.GRAY_TWO
}))``;
