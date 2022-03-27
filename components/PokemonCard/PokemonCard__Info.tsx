import { Flex, Stack, Text } from "@chakra-ui/react"
import numeral from 'numeral'

type Props = {
    name: string;
    rarity: string;
    price: number;
    stocks: number;
};

const PokemonCard__Info = ({ name, rarity, price, stocks }: Props) => {
    return (
        <Flex
            pt="74px"
            pb="36px"
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
                    color="brand.primary"
                >
                    {name}
                </Text>

                <Text color="#0F6DB0">{rarity}</Text>
            </Stack>

            <Stack
                mt="6px"
                direction="row"
                color="brand.secondary"
                fontSize="20px"
                spacing="30px"
            >
                <Text>{numeral(price).format('$0,0[.]00')}</Text>
                <Text>{numeral(stocks).format('0,0')}&nbsp;left</Text>
            </Stack>
        </Flex>
    )
}

export default PokemonCard__Info;