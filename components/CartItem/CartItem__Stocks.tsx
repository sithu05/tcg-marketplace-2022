import { Text } from "@chakra-ui/react"

type Props = {
    stocks: number;
}

export const CartItem__Stocks = ({ stocks }: Props) => {
    return (
        <Text
            fontSize="14px"
            color="brand.placeholder"
        >
            <Text 
                as="span"
                fontWeight="semibold"
                color="brand.alert"
            >
                {stocks}
            </Text>
            &nbsp;cards left
        </Text>
    )
}