import { Text } from "react-native";
import { Container, Logo, UserContainer, UserImage } from "./styles";

function HeaderHome() {
    return(
        <Container>
            <Logo source={require('@assets/Logo.png')} />
            <UserContainer>
                <UserImage source={require('@assets/user.png')}/>
            </UserContainer>
        </Container>
    )
}

export { HeaderHome }