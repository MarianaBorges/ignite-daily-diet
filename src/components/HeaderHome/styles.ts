import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;

    flex-direction: row;

    justify-content: space-between	;
    align-items: center;
`;

export const Logo = styled.Image`
    max-width: 82px;
    max-height: 37px;
`;

export const UserContainer = styled.View`
    width: 40px;
    height: 40px;

    border-radius: 20px;
    border-width: 3px;
    border-color: ${({theme}) => theme.COLORS.GRAY_ONE};
`;

export const UserImage = styled.Image`
    width: 36px;
    height: 36px;    
`;