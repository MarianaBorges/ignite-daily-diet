import { useEffect, useState } from "react"
import { useNavigation, useRoute } from "@react-navigation/native"

import { Header } from "@components/Header"
import { Button } from "@components/Button"
import { Tag } from "@components/Tag"
import { 
    ButtomContent,
    Container, 
    Content, 
    DataTitle, 
    Scroll, 
    Section, 
    Text, 
    Title 
} from "./styles"
import { ConfirmModal } from "@components/ConfirModal"
import { MealProps } from "@screens/NewMeal"
import { mealGetById } from "@storage/meal/mealGetById"
import { Alert } from "react-native"
import { Loading } from "@components/Loading"
import { mealDelete } from "@storage/meal/mealDelete"

interface RouteParams {
    idMeal: number;
}

function Meal() {
    const { goBack, navigate } = useNavigation();
    const routes = useRoute();
    const params = routes.params as RouteParams;

    const [isModalVisible, setIsModalVisible] = useState(false);
    const [meal, setMeal] = useState<MealProps>();
    const [loading, setLoading] = useState(true);
    const type = meal && meal.isInDiet ? 'primary' : 'secundary';

    async function getMeal() {
        try {
            setLoading(true)
            const data = await mealGetById(params?.idMeal);
            setMeal(data);
        } catch (error) {
            Alert.alert("Ops!", "Ocorreu um erro ao carregar a refeição")
        } finally {
            setLoading(false)
        }
    }

    async function handleDeleteMeal() {
        try {
            await mealDelete(params.idMeal);
            navigate('Home');
        } catch (error) {
            Alert.alert("Ops!", "Ocorreu um erro ao deletar refeição") 
        }
    }
    
    useEffect(() => {
        getMeal();
    }, []);

    return (
        <Container>
            <Header onGoBackPress={goBack} title='Refeição'type={type}/>
            {
                loading ? 
                <Loading /> :
                <>
                    <Scroll>
                        <Content>
                            <Section>
                                <Title>{meal!.name}</Title>
                                <Text>{meal!.desc}</Text>
                            </Section>
                            <Section>
                                <DataTitle>Data e hora</DataTitle>
                                <Text>{meal!.date} às {meal!.time}</Text>
                            </Section>
                            <Section>
                                <Tag type={type}/>
                            </Section>
                        </Content>
                    </Scroll>
                    <ButtomContent>
                        <Button onPress={() => navigate({name:'EditMeal', params: { idMeal: meal!.id }})} title="Editar refeição" type="full" icon="edit"/>
                        <Button onPress={() => setIsModalVisible(true)}title="Excluir refeição" type="line" icon="trash"/>
                    </ButtomContent>
                    <ConfirmModal
                        isVisible={isModalVisible}
                        onCancel={() => {setIsModalVisible(false)}}
                        onConfirm={() => {handleDeleteMeal()}}
                    />
                </>
            }
        </Container>
    )
}

export { Meal }