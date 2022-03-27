import { HStack, Text, VStack } from "@chakra-ui/react"
import numeral from "numeral"

type Props = {
    count: number,
    total: number
}

export const CartModal__Totals = ({ count, total }: Props) => {
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
                <Text color="brand.alert">
                    {numeral(count).format('0,0')}
                </Text>
            </HStack>
            <HStack
                w="full"
                justifyContent="space-between"
                fontSize="20px"
                fontWeight="bold"
            >
                <Text>Total price</Text>
                <Text color="brand.alert">
                    {numeral(total).format('$0,0[.]00')}
                </Text>
            </HStack>
        </VStack>
    )
}