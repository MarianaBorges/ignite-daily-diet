import { Modal } from "react-native";
import { ButtonContent, Container, Image, SubTitle, Title, TitleContent } from "./styles";
import { Button } from "@components/Button";

const MODAL_CONFIGS = [
    {
        title: 'Continue assim!',
        subTitle: 'Você continua dentro da dieta. Muito bem!',
        img: '@assets/indiet.png'
    },
    {
        title: 'Que pena!',
        subTitle: 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!',
        img: '@assets/outofdiet.png'
    },
]

interface ConfirmMealProps {
    isInDiet: boolean;
    onPressButton?: () => void;
    isVisible: boolean;
}

function ConfirmMeal({isInDiet = true, onPressButton, isVisible}: ConfirmMealProps ) {

    const modalTexts = isInDiet ? MODAL_CONFIGS[0] : MODAL_CONFIGS[1];

    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={isVisible}
        >
            <Container>
                <TitleContent>
                    <Title isInDiet={isInDiet}>{modalTexts.title}</Title>
                    <SubTitle>{modalTexts.subTitle}</SubTitle>
                </TitleContent>

                {isInDiet ?
                    <Image source={require('@assets/indiet.png')} />
                    :
                    <Image source={require('@assets/outofdiet.png')} />
                }


                <ButtonContent>
                    <Button 
                        title="Ir para a página inicial" 
                        type="full"
                        onPress={onPressButton}
                    />
                </ButtonContent>
            </Container>
        </Modal>
    )
}

export { ConfirmMeal }