import { Box, Flex, Stack, Text } from "@chakra-ui/react"
import { Card } from "../types/Card"


type Props = {
    card: Card
}

export const CardUI = ({ card }: Props) => {

    return (
        <Box
            width="294px"
        >
            <Flex
                pt="74px"
                bgColor="white"
                flexDirection="column"
                alignItems="center"
                borderRadius="20px"
                boxShadow="0px 4px 10px rgba(0, 0, 0, 0.03);"
            >
                <Stack spacing="0" textAlign="center">
                    <Text
                        fontWeight="bold"
                        fontSize="25px"
                    >
                        {card.name}
                    </Text>

                    <Text color="#0F6DB0">{card.rarity}</Text>
                </Stack>

                <Stack
                    mt="6px"
                    direction="row"
                    color="#6A6969"
                    fontSize="20px"
                    spacing="30px"
                >
                    <Text>${card.cardmarket.prices.averageSellPrice}</Text>
                    <Text>{card.set.total}&nbsp;left</Text>
                </Stack>
               
            </Flex>
        </Box>
    )
}