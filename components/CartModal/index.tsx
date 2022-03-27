import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Stack
} from "@chakra-ui/react"

import { CartModal__Paynow } from "./CartModal__Paynow";
import { CartModal__Totals } from "./CartModal__Totals";
import { CartModal__Close } from "./CartModal__Close";

type Props = {
    isOpen: boolean,
    onClose: () => void
};

export const CartModal = ({ isOpen, onClose }: Props) => {
    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                maxWidth="416px"
            >
                <ModalBody
                    pb="40px"
                    bgColor="white"
                    borderRadius="20px"
                >
                    <Stack
                        spacing="26px"
                        alignItems="center"
                    >
                        <Button
                            size="xs"
                            fontWeight="normal"
                            variant="link">
                            Clear all
                        </Button>
                        <CartModal__Totals />
                        <CartModal__Paynow />
                    </Stack>
                

                </ModalBody>

                <ModalFooter p="0">
                    <Box
                        position="absolute"
                        left="50%"
                        transform="translate(-50%, 5%)"
                    >
                        <CartModal__Close onClose={onClose} />
                    </Box>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}