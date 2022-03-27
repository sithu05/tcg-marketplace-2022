import { Text, VStack } from "@chakra-ui/react"
import numeral from "numeral";

type Props = {
    price: number;
};

export const CartItem__Price = ({ price }: Props) => {
    return (
        <VStack
            spacing="0"
            alignItems="end"
        >
            <Text
                fontSize="12px"
                fontWeight="medium"
                color="brand.primary"
            >
                price
            </Text>
            <Text
                fontWeight="bold"
                color="brand.action"
            >
                 {numeral(price).format('$0,0[.]00')}
            </Text>
        </VStack>
    )
}