import {  Flex, Image } from "@chakra-ui/react"

type Props = {
    image: string;
    name: string;
}

const PokemonCard__Image = ({ image, name }: Props) => {
    return (
        <Flex
            justifyContent="center"
            mb="-58px"
        >
            <Image width="195px" src={image} alt={name} zIndex="1" />
        </Flex>
    )
}

export default PokemonCard__Image;