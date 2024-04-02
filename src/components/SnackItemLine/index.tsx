import { TouchableOpacityProps } from "react-native";

import { Container,
    ContentDescription, 
    Description, 
    Status, 
    Time 
} from "./styles";
import { MealProps } from "@screens/NewMeal";
import { formattedTime } from "@utils/helpers";


interface ItemProps extends TouchableOpacityProps {
    data: MealProps;
}

function SnackItemList({data, ...rest}: ItemProps){
    return (
        <Container {...rest}>
            <Time>{data.time}</Time>
            <ContentDescription>
                <Description>{data.name}</Description>
            </ContentDescription>
            <Status isInDiet={data.isInDiet} />
        </Container>
    )
}

export { SnackItemList }