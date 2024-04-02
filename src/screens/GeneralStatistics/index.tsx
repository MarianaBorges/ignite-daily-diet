import { useCallback, useEffect, useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { CardStatistic } from "@components/CardStatisc";
import { Loading } from "@components/Loading";
import { 
    CardContent, 
    Container, 
    Content, 
    GoBackButton, 
    GoBackIcon, 
    Header, 
    StatisticContent, 
    SubtleHeader, 
    Title, 
    TitleHeader 
} from "./styles";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { Alert } from "react-native";
import { MealProps } from "@screens/NewMeal";
import { getBestSequence, getMealsInOfDiet, getMealsOutOfDiet, getPercentInDiet } from "@utils/helpers";

function GeneralStatistics(){
    const { goBack } = useNavigation();
    const [isLoading, setIsLoading] = useState(false);
    const [meals, setMeals] = useState<MealProps[]>([]);
    const mealsOutOfDiet = getMealsOutOfDiet(meals);
    const mealsInOfDiet = getMealsInOfDiet(meals);
    const percentInDiet = getPercentInDiet(meals);
    const bestSequence = getBestSequence(meals);
    const type = percentInDiet >= 50 ? 'primary' : 'secundary';
    
    async function getAll() {
        try {
            setIsLoading(true)
            const all = await mealGetAll();
            setMeals(all);
        } catch (error) {
            Alert.alert("Ops!", "Ocorreu um erro ao carregar as refeições")
        } finally {
            setIsLoading(false)
        }
    }

    useFocusEffect(useCallback(() => {
        getAll();
    },[]));

    if (isLoading === true)
        return (<Loading />)

    return(
        <Container type={type}>
            <Header>
                <GoBackButton onPress={goBack}>
                    <GoBackIcon type={type}/>
                </GoBackButton>
                <TitleHeader>
                   {percentInDiet.toFixed()}%
                </TitleHeader>
                <SubtleHeader>
                        das refeições dentro da dieta
                </SubtleHeader>
            </Header>
            <Content>
                <Title>
                    Estatísticas gerais
                </Title>
                <StatisticContent>
                    <CardStatistic
                        statistic={bestSequence}
                        description="melhor sequência de pratos dentro da dieta"
                    />
                </StatisticContent>
                <StatisticContent>
                    <CardStatistic
                        statistic={meals.length}
                        description="refeições registradas"
                    />
                </StatisticContent>
                <StatisticContent>
                    <CardContent>
                        <CardStatistic
                            statistic={mealsInOfDiet}
                            description="refeições dentro da dieta"
                        />
                    </CardContent>
                    <CardContent>
                        <CardStatistic
                            statistic={mealsOutOfDiet}
                            description=" refeições fora da dieta "
                            type="secundary"
                        />
                    </CardContent>
                </StatisticContent>
            </Content>
        </Container>
    )
}

export { GeneralStatistics }