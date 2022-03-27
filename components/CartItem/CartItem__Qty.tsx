import { ChevronDownIcon, ChevronUpIcon, SmallCloseIcon } from "@chakra-ui/icons"
import { HStack, IconButton, Text, VStack } from "@chakra-ui/react"

import { useCartContext } from "../../context/cart";

type Props = {
    id: number;
    qty: number;
};

export const CartItem__Qty = ({ qty, id }: Props) => {
    const { increase, decrease, remove } = useCartContext();

    return (
        <HStack
            spacing="1"
            alignItems="start"
            color="brand.action"
            pr="3px"
        >
            <Text
                pt="1"
                fontSize="20px"
                fontWeight="semibold"
            >
                {qty}
            </Text>

            <VStack
                spacing="1"
            >
                <IconButton
                    minW="8px"
                    height="8px"
                    size="xs"
                    aria-label="Up"
                    variant="link"
                    color="brand.action"
                    onClick={() => increase(id)}
                    icon={
                        <ChevronUpIcon />
                    }
                />

                {qty === 1 ? (
                    <IconButton
                        minW="8px"
                        height="8px"
                        size="xs"
                        aria-label="Remove"
                        variant="link"
                        color="brand.alert"
                        onClick={() => remove(id)}
                        icon={
                            <SmallCloseIcon />
                        }
                    />
                ) : (
                    <IconButton
                        minW="8px"
                        height="8px"
                        size="xs"
                        aria-label="Remove"
                        variant="link"
                        color="brand.action"
                        onClick={() => decrease(id)}
                        icon={
                            <ChevronDownIcon />
                        }
                    />
                )}

            </VStack>
        </HStack>
    )
}