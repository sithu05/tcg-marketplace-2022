import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons"
import { HStack, IconButton, Text, VStack } from "@chakra-ui/react"

type Props = {
    qty: number;
};

export const CartItem__Qty = ({ qty }: Props) => {
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
                    icon={
                        <ChevronUpIcon />
                    }
                />

                <IconButton
                    minW="8px"
                    height="8px"
                    size="xs"
                    aria-label="Up"
                    variant="link"
                    color="brand.action"
                    icon={
                        <ChevronDownIcon />
                    }
                />
            </VStack>
        </HStack>
    )
}