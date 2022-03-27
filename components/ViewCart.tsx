import { Box, Button, Circle, useDisclosure } from "@chakra-ui/react"
import Image from 'next/image'

import { useCartContext } from "../context/cart"
import { CartModal } from "./CartModal"

import cartPic from '../public/images/cart.png'

export const ViewCart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();


    const { cart } = useCartContext();

    return (
        <>
            <Box
                position="relative"
                color="white"
                fontSize="12px"
                fontWeight="medium"
            >
                <Button
                    leftIcon={<Image src={cartPic} width="21" height="21" alt="cart" />}
                    type="button"
                    colorScheme="blue"
                    borderRadius="10px"
                    bgColor="brand.action"
                    fontSize="inherit"
                    fontWeight="inherit"
                    onClick={onOpen}
                >
                    View cart
                </Button>

                <Box
                    position="absolute"
                    top="0.5"
                    left="0.5"
                    transform="translate(-50%, -50%)"
                    zIndex="docked"
                >
                    <Circle
                        size="16px"
                        bg="#FF6363"
                    >
                        {cart.length}
                    </Circle>
                </Box>
            </Box>

            <CartModal isOpen={isOpen} onClose={onClose} />
        </>
    )
}