import { Box, Flex, HStack, Image, VStack } from "@chakra-ui/react"

import { Cart } from "../../types/Cart"

import { CartItem__Price } from "./CarItem__Price"
import { CartItem__Info } from "./CartItem__Info"
import { CartItem__Qty } from "./CartItem__Qty"
import { CartItem__Stocks } from "./CartItem__Stocks"

type Props = {
    cart: Cart
}

export const CartItem = ({ cart }: Props) => {
    const price = cart.card.cardmarket.prices.averageSellPrice;

    return (
        <Flex
            width="full"
            height="107px"
            
        >
            <Image
                mr="16px"
                width="77px"
                src={cart.card.images.small}
                alt={"sooner"}
                fallbackSrc="https://via.placeholder.com/195x272" 
            />

            <HStack
                width="full"
                height="full"
                flex="1"
                justifyContent="space-between"
            >
                <VStack
                    height="full"
                    alignItems="start"
                    justifyContent="space-around"
                >
                    <CartItem__Info
                        name={cart.card.name}
                        price={price}
                    />

                    <CartItem__Stocks
                        stocks={cart.card.set.total}
                    />
                </VStack>

                <VStack
                    height="full"
                    alignItems="end"
                    justifyContent="space-around"
                >
                    <CartItem__Qty qty={cart.qty} />

                    <CartItem__Price price={price * cart.qty} />
                </VStack>

            </HStack>
        </Flex>
    )
}