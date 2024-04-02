import { TouchableOpacityProps } from "react-native";
import { Circle, Container, Title, RadioButtonType } from "./styles";

interface RadioButtonProps extends TouchableOpacityProps{
    data: {
        type: RadioButtonType;
        isSelect: boolean | undefined;
    }
}

function RadioButton ({data, ...rest}: RadioButtonProps) {
    return (
        <Container isSelect={data.isSelect} type={data.type} {...rest}>
            <Circle isSelect={data.isSelect} type={data.type} />
            <Title>{data.type === "confirm" ? "Sim" : "Não"}</Title>
        </Container>
    )
}

export { RadioButton }