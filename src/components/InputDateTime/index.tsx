import DateTimePicker from '@react-native-community/datetimepicker';
import { 
    Container, 
    InputData, 
    Title, 
    Text 
} from "./styles";

interface InputDateTime {
    type: 'date' | 'time';
    visible?: boolean;
    value: any;
    onChange: (event: any, selectedDate: any) => void;
    onPress: () => void;
}

function InputDateTime({ type, visible = false, onPress, onChange, value }: InputDateTime){
    const title = type === 'date' ? 'Data' : 'Hora';

    return (
        <Container>
            <Title>{title}</Title>
            <InputData onPress={onPress}>
                <Text>
                    {
                        type === 'date' 
                        ? (value.getDate() < 10 ? '0' : '') + value.getDate()+'/'+ (value.getMonth() < 10 ? '0' : '') + (value.getMonth() + 1) + '/'+ value.getFullYear()
                        : (value.getHours() < 10 ? '0' : '') + value.getHours()+':'+ (value.getMinutes() < 10 ? '0' : '') + value.getMinutes()

                    }
                </Text>
            </InputData>
            {visible && 
                <DateTimePicker
                    testID="dateTimePicker"
                    mode={type}
                    value={value}
                    is24Hour={true}
                    onChange={onChange}
                    maximumDate={new Date()}
                />
            }
        </Container>
    )
}

export { InputDateTime }