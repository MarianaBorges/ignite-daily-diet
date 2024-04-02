import { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";

import { Header } from "@components/Header";
import { Input } from "@components/Input";
import { Button } from "@components/Button";
import { InputDateTime } from "@components/InputDateTime";
import { RadioButton } from "@components/RadioButton";
import { RadioButtonType } from "@components/RadioButton/styles";
import { 
    Container, 
    Content, 
    ButtonsRowContent, 
    DateTimeContent, 
    IsInDeitContent, 
    TitleIsInDeit, 
    ButtomContent, 
    Scroll 
} from "./styles";
import { ConfirmMeal } from "@components/ConfirmMeal";
import { Alert } from "react-native";
import { mealCreate } from "@storage/meal/mealCreate";
import { formattedDate, formattedTime } from "@utils/helpers";

interface RouteParams {
    typeOperation: 'editMeal' | 'newMeal'
}

interface radioButtonIsDeitProps {
    type: RadioButtonType;
    isSelect: boolean | undefined;
}

export interface MealProps {
    id: number;
    name: string;
    desc: string;
    date: string;
    time: string;
    isInDiet: boolean;
}

function NewMeal(){

    const { goBack, navigate } = useNavigation();
    const routes = useRoute();
    const params = routes.params as RouteParams;
    const [radioButtonIsDeit, setRadioButtonIsDeit] = useState<radioButtonIsDeitProps[]>([
        { type: 'confirm', isSelect: undefined},
        { type: 'deny', isSelect: undefined }
    ]);
    const [modalVisible, setModalVisible] = useState(false);
    const [showDatePiker, setShowDatePiker] = useState(false);
    const [date, setDate] = useState(new Date());
    const [showTimePiker, setShowTimePiker] = useState(false);
    const [time, setTime] = useState(new Date());
    const [name, setName] = useState('');
    const [desc, setDesc] = useState('');

    function handleIsInDeit(button: string) {
        if (button === 'deny'){
            setRadioButtonIsDeit([
                { type: 'confirm', isSelect: false},
                { type: 'deny', isSelect: true }
            ])
        }
        if (button === 'confirm'){
            setRadioButtonIsDeit([
                { type: 'confirm',isSelect: true},
                { type: 'deny', isSelect: false }
            ])
        }
    }

    function onChangeDate (event: any, selectedDate: any) {
        const currentDate = selectedDate;
        setShowDatePiker(false);
        setDate(currentDate);
    };

    function onChangeTime (event: any, selectedDate: any) {
        const currentTime = selectedDate;
        setShowTimePiker(false);
        setTime(currentTime);
    };

    async function handleConfirm () {

        if (name === '' || desc === '' || radioButtonIsDeit[0].isSelect === undefined) {
            Alert.alert("Ops!", "Preencha os campos corretamente!")
        }else {
            const newMeal: MealProps = {
                id: date.getMilliseconds(),
                name,
                desc,
                date: formattedDate(String(date)),
                time: formattedTime(String(time)),
                isInDiet: radioButtonIsDeit[0].isSelect ? true : false
            }
            
            await mealCreate(newMeal);
            setModalVisible(true);
        }
    }

    return (
        <Container>
            <Header onGoBackPress={goBack} title={'Nova refeição'} />
            <Scroll>
            <Content>
                <Input 
                    title="Nome" 
                    value={name} 
                    onChangeText={setName}
                />
                <Input
                    value={desc}
                    onChangeText={setDesc}
                    title="Descrição" 
                    multiline 
                    numberOfLines={6} 
                />
                <DateTimeContent>
                    <InputDateTime 
                        value={date}
                        onPress={() => setShowDatePiker(true)}
                        type="date"
                        visible={showDatePiker}
                        onChange={onChangeDate}    
                    />
                    <InputDateTime 
                        value={time}
                        onPress={() => setShowTimePiker(true)}
                        type="time"
                        visible={showTimePiker}
                        onChange={onChangeTime}    
                    />
                </DateTimeContent>

                <IsInDeitContent>
                    <TitleIsInDeit>
                        Está dentro da dieta?
                    </TitleIsInDeit>
                    <ButtonsRowContent>
                        <RadioButton 
                            onPress={() => handleIsInDeit("confirm" )}
                            data={radioButtonIsDeit[0]}
                        />
                        <RadioButton 
                            onPress={() => handleIsInDeit("deny")}
                            data={radioButtonIsDeit[1]}
                        />
                    </ButtonsRowContent>
                </IsInDeitContent>
            </Content>
            </Scroll>
            <ButtomContent>
                <Button 
                    title="Cadastrar Refeição" 
                    type="full" 
                    onPress={() => {handleConfirm()}}
                />
            </ButtomContent>
            <ConfirmMeal 
                isVisible={modalVisible} 
                isInDiet={radioButtonIsDeit[0].isSelect ? true : false} 
                onPressButton={() => navigate('Home')}
            />
        </Container>
    )
}

export { NewMeal }