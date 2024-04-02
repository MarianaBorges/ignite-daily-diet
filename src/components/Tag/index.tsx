import { 
    Circle, 
    CircleType, 
    Container, 
    Text 
} from "./styles"

interface TagProps {
    type?: CircleType
}

function Tag({ type = 'primary'}: TagProps) {

    const tagTitle = type === 'primary' ? 'dentro da dieta' : 'fora da dieta'

    return (
        <Container>
            <Circle type={type} />
            <Text>{tagTitle}</Text>
        </Container>
    )
}

export { Tag }