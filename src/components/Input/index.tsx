import { Container, Title, InputText } from "./styles";
import { TextInputProps } from "react-native";

export interface InputProps extends TextInputProps {
    title: string;
}

function Input({title, ...rest}: InputProps) {
    return(
        <Container>
            <Title>{title}</Title>
            <InputText {...rest}/>
        </Container>
    )
}

export { Input }