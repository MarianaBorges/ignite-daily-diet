import { TouchableOpacityProps } from "react-native";
import { 
    Container, 
    Content, 
    Icon, 
    SubTitle, 
    Title 
} from "./styles";

interface Props extends TouchableOpacityProps{
    percentage: number;
}

function SnackPercentageCard({ percentage, ...rest } : Props) {
    const isGreen = percentage >= 50 ? true : false;
    return (
        <Container {...rest} isGreen={isGreen}>
            
                <Icon isGreen={isGreen}/>
            
            <Title>{percentage.toFixed()}%</Title>
            <SubTitle>das refeições dentro da dieta</SubTitle>
        </Container>
    )
}

export { SnackPercentageCard }