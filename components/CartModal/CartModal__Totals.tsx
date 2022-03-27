import { HStack, Text, VStack } from "@chakra-ui/react"

export const CartModal__Totals = () => {
    return (
        <VStack
            width="209px"
            spacing="5px"
        >
            <HStack
                w="full"
                justifyContent="space-between"
                fontWeight="semibold"
            >
                <Text>Total cards</Text>
                <Text color="brand.alert">7</Text>
            </HStack>
            <HStack
                w="full"
                justifyContent="space-between"
                fontSize="20px"
                fontWeight="bold"
            >
                <Text>Total price</Text>
                <Text color="brand.alert">$19.97</Text>
            </HStack>
        </VStack>
    )
}