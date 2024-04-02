import { useCallback, useState } from "react";
import { Alert, Dimensions, SectionList } from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";

import { HeaderHome } from "@components/HeaderHome";
import { SnackPercentageCard } from "@components/SnackPercentageCard";
import { Button } from "@components/Button";
import { SnackItemList } from "@components/SnackItemLine";
import { 
    Container, 
    Content, 
    Title, 
    TitleSection 
} from "./styles";
import { MealProps } from "@screens/NewMeal";
import { mealGetAll } from "@storage/meal/mealGetAll";
import { getPercentInDiet } from "@utils/helpers";

interface SectionMealProps{
    title: string;
    data: MealProps[]
}

function Home(){
    const { navigate } = useNavigation();
    const width = Dimensions.get('window').width - 48;
    const [meals, setMeals] = useState<SectionMealProps[]>([]);
    const [percentInDeit, setPercentInDeit] = useState<number>(0);
    const [loading, setLoading] = useState(true);

    function transformArray(data: MealProps[]) {
        let sectionData = new Array<SectionMealProps>();

        const onlyDates = data.map((item) => item.date);
        const nonRepeatingDateArray = onlyDates.filter(function (obj, item) {
            return onlyDates.indexOf(obj) === item
        })

        nonRepeatingDateArray.forEach((item) => {
            const filteredData = data.filter(function(dataItem) {
                return dataItem.date === item
            });

            const newSection = {
                title: item,
                data: filteredData
            }
            sectionData.push(newSection);
        });
        return sectionData;
    }

    function handleShowMeal(data: MealProps){
        navigate({
            name: 'Meal',
            params: { idMeal: data.id }
          });
    }

    async function getAll() {
        try {
            setLoading(true)
            const all = await mealGetAll();
            setMeals(transformArray(all));
            setPercentInDeit(getPercentInDiet(all));
        } catch (error) {
            Alert.alert("Ops!", "Ocorreu um erro ao carregar as refeições")
        } finally {
            setLoading(false)
        }
    }

    useFocusEffect(useCallback(() => {
        getAll();
    },[]))

     return(
        <Container>
            <HeaderHome />
            <SnackPercentageCard 
                onPress={() => navigate("GeneralStatistics")} 
                percentage={percentInDeit} 
            />

            <Content>
                <Title>Refeições</Title>
                <Button 
                    onPress={() => navigate('NewMeal')}
                    title="Nova refeição" 
                    type="full" 
                    icon="plus" 
                />
            </Content>
            <SectionList 
                sections={meals}
                keyExtractor={(item, index) => item + index.toString()}
                renderItem={({ item }) => (
                        <SnackItemList 
                            onPress={() => handleShowMeal(item)} 
                            data={item}
                        />
                    )}
                renderSectionHeader={({section:{title}}) => (<TitleSection>{title}</TitleSection>)}  
                ListEmptyComponent={() => <Title>Você não tem refeições cadastradas</Title>}
                contentContainerStyle={[{maxWidth: width}, meals.length === 0 && {paddingTop: 20}]}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    )
}

export { Home }