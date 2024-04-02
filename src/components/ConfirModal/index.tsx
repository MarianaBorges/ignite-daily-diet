import { Button } from "@components/Button";
import { ButtonContent, ButtonWrapper, Container, Content, ModalContent, Title, TitleContent } from "./styles";
import { Modal } from "react-native"

interface ConfirmModalProps {
    isVisible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
}

function ConfirmModal({isVisible, onConfirm, onCancel}: ConfirmModalProps) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={isVisible}
        >
            <Container>
                <Content>
                    <ModalContent>
                        <TitleContent>
                            <Title>
                                Deseja realmente excluir o{`\n`} registro da refeição?
                            </Title>
                        </TitleContent>
                        <ButtonWrapper>
                            <ButtonContent>
                                <Button 
                                    type="line" 
                                    title="Cancelar"
                                    onPress={onCancel}
                                />
                            </ButtonContent>
                            <ButtonContent>
                                <Button 
                                    type="full" 
                                    title="Sim, excluir"
                                    onPress={onConfirm}
                                />
                            </ButtonContent>
                        </ButtonWrapper>
                    </ModalContent>
                </Content>
            </Container>
        </Modal>
    )
}

export { ConfirmModal }