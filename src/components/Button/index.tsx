import { TouchableOpacityProps } from "react-native";
import { Container, EditIcon, PlusIcon, StyleButton, Title, TrashIcon } from "./styles";

interface ButtonProps extends TouchableOpacityProps{
    icon?: 'plus'|'edit'|'trash';
    type: StyleButton;
    title: string;
}

function Button({icon, type, title, ...rest }: ButtonProps){
    return (
        <Container type={type} {...rest}>
            {
               icon === 'plus' ? <PlusIcon /> :
               icon === 'edit' ? <EditIcon /> :
               icon === 'trash' && type === 'line' && <TrashIcon /> 
            }
            <Title type={type}>
               {title}
            </Title>
        </Container>
    )
}

export { Button }