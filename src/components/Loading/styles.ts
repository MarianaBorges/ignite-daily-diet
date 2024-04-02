import { ActivityIndicator } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.COLORS.WHITE};
`;

export const Indicator = styled(ActivityIndicator).attrs(({theme}) => ({
    size: "large",
    color: theme.COLORS.GREEN_DARK,
}))``;