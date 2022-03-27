import { Text, VStack } from "@chakra-ui/react"
import numeral from "numeral";

type Props = {
    name: string;
    price: number;
}

export const CartItem__Info = ({ name, price }: Props) => {
    return (
        <VStack
            spacing="0"
            alignItems="start"
        >
            <Text
                fontSize="20px"
                fontWeight="bold"
                color="brand.primary"
            >
                {name}
            </Text>
            <Text
                fontSize="12px"
                color="brand.placeholder"
            >
                <Text as="span" color="brand.primary">
                    {numeral(price).format('$0,0[.]00')}
                </Text>
                &nbsp;per card
            </Text>
        </VStack>
    )
}