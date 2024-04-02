import { TouchableOpacityProps } from "react-native";
import { 
    Container, 
    ContainerDetails, 
    GoBackButton, 
    GoBackIcon, 
    Title, 
    TitleContent, 
    TypeHeader 
} from "./styles";

interface HeaderProps {
    title: string;
    type?: TypeHeader;
    onGoBackPress?: () => void;
}

function Header({title, type = null, onGoBackPress}: HeaderProps) {
    return (
        <Container type={type}>
            <TitleContent>
                <GoBackButton onPress={onGoBackPress}>
                    <GoBackIcon type={type}/>
                </GoBackButton>
                <Title>
                    {title}
                </Title>
            </TitleContent>
            <ContainerDetails />
        </Container>
    )
}

export { Header }