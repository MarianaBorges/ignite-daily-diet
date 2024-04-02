import { 
    Container, 
    Subtitle, 
    Title, 
    CardType 
} from "./styles";

interface Props {
    statistic: number;
    description: string;
    type?: CardType;
}

function CardStatistic({statistic, description, type = 'primary'}: Props ){
    return (
        <Container type={type}>
            <Title>
                {statistic}
            </Title>
            <Subtitle>
                {description}
            </Subtitle>
        </Container>
    )
}

export { CardStatistic }