import {
    Box,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalOverlay,
    Stack,
    VStack
} from "@chakra-ui/react"

import { CartModal__Paynow } from "./CartModal__Paynow";
import { CartModal__Totals } from "./CartModal__Totals";
import { CartModal__Close } from "./CartModal__Close";
import { CartItem } from "../CartItem";

import { useCartContext } from "../../context/cart";

type Props = {
    isOpen: boolean,
    onClose: () => void
};

export const CartModal = ({ isOpen, onClose }: Props) => {
    const { cart, clearAll } = useCartContext();

    const count = cart.reduce((num, cart) => num + cart.qty, 0);
    const total = cart.reduce((price, cart) => {
        return price + (cart.qty * cart.card.cardmarket.prices.averageSellPrice)
    }, 0);

    return (
        <Modal isCentered isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent
                maxWidth="416px"
            >
                <ModalBody
                    p="0"
                    bgColor="white"
                    borderRadius="20px"
                >
                    <Box
                        m="40px"
                        mb="0"
                        position="relative"
                    >
                        <Box
                            minH="370px"
                            maxH="370px"
                            overflowY="scroll"
                        >
                            <VStack
                                spacing="25px"
                            >
                                {cart.map((item) => (
                                    <CartItem key={item.id} cart={item} />
                                ))}
                            </VStack>
                        </Box>

                        <Box
                            position="absolute"
                            bottom="0"
                            left="0"
                            width="100%"
                            height="58px"
                            bgGradient="linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 100%)"
                        />
                    </Box>
                        
                    <Stack
                        mb="40px"
                        spacing="26px"
                        alignItems="center"
                    >
                        <Button
                            size="xs"
                            fontWeight="normal"
                            variant="link"
                            onClick={clearAll}
                        >
                            Clear all
                        </Button>
                        <CartModal__Totals
                            count={count}
                            total={total}
                        />
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